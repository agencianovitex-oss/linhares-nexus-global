import { useEditor, EditorContent, BubbleMenu, type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect } from "react";
import {
  Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
  Heading1, Heading2, Heading3, Quote, Link2, Image as ImageIcon, Minus, Code,
  AlignLeft, AlignCenter, AlignRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: JSONContent | null;
  onChange: (value: JSONContent) => void;
  placeholder?: string;
}

export function TipTapEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[rgb(179,134,66)] underline" } }),
      Placeholder.configure({ placeholder: placeholder ?? "Comece a escrever…" }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value ?? "",
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none p-6",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getJSON();
    if (JSON.stringify(current) !== JSON.stringify(value) && value) {
      editor.commands.setContent(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  if (!editor) return null;

  const Btn = ({ active, onClick, children, title }: any) => (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      className={cn(
        "p-2 rounded hover:bg-muted transition-colors",
        active && "bg-[rgb(6,36,67)] text-white hover:bg-[rgb(6,36,67)]"
      )}
    >
      {children}
    </button>
  );

  const promptLink = () => {
    const url = window.prompt("URL do link", editor.getAttributes("link").href ?? "https://");
    if (url === null) return;
    if (url === "") { editor.chain().focus().unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="border border-input bg-white rounded-md overflow-hidden flex flex-col" style={{ height: "70vh", minHeight: 500 }}>
      {/* Sticky main toolbar */}
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-2 backdrop-blur">
        <Btn title="Negrito" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={14} /></Btn>
        <Btn title="Itálico" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={14} /></Btn>
        <Btn title="Sublinhado" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={14} /></Btn>
        <span className="mx-1 h-5 w-px bg-border" />
        <Btn title="H1" active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}><Heading1 size={14} /></Btn>
        <Btn title="H2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={14} /></Btn>
        <Btn title="H3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={14} /></Btn>
        <span className="mx-1 h-5 w-px bg-border" />
        <Btn title="Lista" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={14} /></Btn>
        <Btn title="Lista ordenada" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={14} /></Btn>
        <Btn title="Citação" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={14} /></Btn>
        <Btn title="Código" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code size={14} /></Btn>
        <Btn title="Separador" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={14} /></Btn>
        <span className="mx-1 h-5 w-px bg-border" />
        <Btn title="Alinhar à esquerda" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}><AlignLeft size={14} /></Btn>
        <Btn title="Centralizar" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}><AlignCenter size={14} /></Btn>
        <Btn title="Alinhar à direita" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}><AlignRight size={14} /></Btn>
        <span className="mx-1 h-5 w-px bg-border" />
        <Btn title="Link" active={editor.isActive("link")} onClick={promptLink}><Link2 size={14} /></Btn>
        <Btn title="Imagem (URL)" onClick={() => {
          const url = window.prompt("URL da imagem");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}><ImageIcon size={14} /></Btn>
      </div>

      {/* Contextual bubble menu (Notion/Medium style) */}
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 120, placement: "top" }}
        shouldShow={({ editor, from, to }) => from !== to && !editor.isActive("image")}
      >
        <div className="flex items-center gap-0.5 rounded-md border border-border bg-white p-1 shadow-lg">
          <Btn title="Negrito" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={14} /></Btn>
          <Btn title="Itálico" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={14} /></Btn>
          <Btn title="Link" active={editor.isActive("link")} onClick={promptLink}><Link2 size={14} /></Btn>
          <span className="mx-1 h-5 w-px bg-border" />
          <Btn title="H1" active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}><Heading1 size={14} /></Btn>
          <Btn title="H2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={14} /></Btn>
          <Btn title="H3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={14} /></Btn>
          <Btn title="Citação" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={14} /></Btn>
        </div>
      </BubbleMenu>

      {/* Scrollable editor body */}
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
