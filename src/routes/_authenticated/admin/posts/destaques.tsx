import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dashboardStats, updateFeaturedOrder } from "@/lib/admin/posts.functions";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/posts/destaques")({
  component: FeaturedPage,
});

function FeaturedPage() {
  const stats = useServerFn(dashboardStats);
  const update = useServerFn(updateFeaturedOrder);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "dashboard"], queryFn: () => stats() });
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (data?.featured) setItems(data.featured);
  }, [data]);

  const save = useMutation({
    mutationFn: (newItems: any[]) =>
      update({ data: { items: newItems.map((it, idx) => ({ id: it.id, featured_order: idx + 1 })) } }),
    onSuccess: () => { toast.success("Ordem atualizada."); qc.invalidateQueries({ queryKey: ["admin","dashboard"] }); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIdx = items.findIndex((i) => i.id === active.id);
    const newIdx = items.findIndex((i) => i.id === over.id);
    setItems(arrayMove(items, oldIdx, newIdx));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Ordem dos destaques</h1>
          <p className="text-sm text-muted-foreground">Arraste para reordenar. Salve para aplicar.</p>
        </div>
        <Button onClick={() => save.mutate(items)} className="bg-[rgb(6,36,67)] text-white">Salvar ordem</Button>
      </div>

      <div className="bg-white border border-border">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
            {items.map((it, idx) => (
              <SortableRow key={it.id} item={it} index={idx} />
            ))}
          </SortableContext>
        </DndContext>
        {items.length === 0 && <p className="p-6 text-center text-sm text-muted-foreground">Nenhum post marcado como destaque.</p>}
      </div>
    </div>
  );
}

function SortableRow({ item, index }: { item: any; index: number }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 };
  const title = item.translations?.find((t: any) => t.locale === "pt")?.title ?? item.slug;
  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3 border-b border-border p-3 bg-white">
      <button {...attributes} {...listeners} className="cursor-grab p-1 text-muted-foreground"><GripVertical size={16} /></button>
      <span className="text-xs text-[rgb(179,134,66)] font-bold w-6">#{index + 1}</span>
      <Link to="/admin/posts/$id" params={{ id: item.id }} className="flex-1 hover:text-[rgb(179,134,66)]">{title}</Link>
    </div>
  );
}
