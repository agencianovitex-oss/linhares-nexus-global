export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      award_translations: {
        Row: {
          award_id: string
          description: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          title: string
        }
        Insert: {
          award_id: string
          description?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          title: string
        }
        Update: {
          award_id?: string
          description?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "award_translations_award_id_fkey"
            columns: ["award_id"]
            isOneToOne: false
            referencedRelation: "awards"
            referencedColumns: ["id"]
          },
        ]
      }
      awards: {
        Row: {
          certificate_url: string | null
          created_at: string
          display_order: number
          featured: boolean
          id: string
          image_url: string | null
          issuer: string | null
          updated_at: string
          year: number | null
        }
        Insert: {
          certificate_url?: string | null
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          image_url?: string | null
          issuer?: string | null
          updated_at?: string
          year?: number | null
        }
        Update: {
          certificate_url?: string | null
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          image_url?: string | null
          issuer?: string | null
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      category_translations: {
        Row: {
          category_id: string
          description: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
        }
        Insert: {
          category_id: string
          description?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
        }
        Update: {
          category_id?: string
          description?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      expertise_page_translations: {
        Row: {
          body: Json
          expertise_page_id: string
          id: string
          intro: string | null
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description: string | null
          meta_title: string | null
          subtitle: string | null
          title: string
        }
        Insert: {
          body?: Json
          expertise_page_id: string
          id?: string
          intro?: string | null
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          subtitle?: string | null
          title: string
        }
        Update: {
          body?: Json
          expertise_page_id?: string
          id?: string
          intro?: string | null
          locale?: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          subtitle?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "expertise_page_translations_expertise_page_id_fkey"
            columns: ["expertise_page_id"]
            isOneToOne: false
            referencedRelation: "expertise_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      expertise_pages: {
        Row: {
          cover_image_url: string | null
          created_at: string
          display_order: number
          id: string
          profession_key: string
          related_visa_types: Database["public"]["Enums"]["visa_type"][]
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          updated_at: string
        }
        Insert: {
          cover_image_url?: string | null
          created_at?: string
          display_order?: number
          id?: string
          profession_key: string
          related_visa_types?: Database["public"]["Enums"]["visa_type"][]
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
        }
        Update: {
          cover_image_url?: string | null
          created_at?: string
          display_order?: number
          id?: string
          profession_key?: string
          related_visa_types?: Database["public"]["Enums"]["visa_type"][]
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
        }
        Relationships: []
      }
      media_appearance_translations: {
        Row: {
          excerpt: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          media_appearance_id: string
          title: string
        }
        Insert: {
          excerpt?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          media_appearance_id: string
          title: string
        }
        Update: {
          excerpt?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          media_appearance_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_appearance_translations_media_appearance_id_fkey"
            columns: ["media_appearance_id"]
            isOneToOne: false
            referencedRelation: "media_appearances"
            referencedColumns: ["id"]
          },
        ]
      }
      media_appearances: {
        Row: {
          created_at: string
          display_order: number
          featured: boolean
          id: string
          outlet: string
          outlet_logo_url: string | null
          published_at: string | null
          thumbnail_url: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          outlet: string
          outlet_logo_url?: string | null
          published_at?: string | null
          thumbnail_url?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          outlet?: string
          outlet_logo_url?: string | null
          published_at?: string | null
          thumbnail_url?: string | null
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      media_assets: {
        Row: {
          alt: string | null
          created_at: string
          height: number | null
          id: string
          type: string
          uploaded_by: string | null
          url: string
          width: number | null
        }
        Insert: {
          alt?: string | null
          created_at?: string
          height?: number | null
          id?: string
          type?: string
          uploaded_by?: string | null
          url: string
          width?: number | null
        }
        Update: {
          alt?: string | null
          created_at?: string
          height?: number | null
          id?: string
          type?: string
          uploaded_by?: string | null
          url?: string
          width?: number | null
        }
        Relationships: []
      }
      office_translations: {
        Row: {
          description: string | null
          directions: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          office_id: string
        }
        Insert: {
          description?: string | null
          directions?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          office_id: string
        }
        Update: {
          description?: string | null
          directions?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          office_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "office_translations_office_id_fkey"
            columns: ["office_id"]
            isOneToOne: false
            referencedRelation: "offices"
            referencedColumns: ["id"]
          },
        ]
      }
      offices: {
        Row: {
          address: string | null
          city: string
          created_at: string
          display_order: number
          email: string | null
          google_maps_url: string | null
          hours: string | null
          id: string
          lat: number | null
          lng: number | null
          office_images: string[]
          phone: string | null
          state: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          city: string
          created_at?: string
          display_order?: number
          email?: string | null
          google_maps_url?: string | null
          hours?: string | null
          id?: string
          lat?: number | null
          lng?: number | null
          office_images?: string[]
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string
          created_at?: string
          display_order?: number
          email?: string | null
          google_maps_url?: string | null
          hours?: string | null
          id?: string
          lat?: number | null
          lng?: number | null
          office_images?: string[]
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      page_translations: {
        Row: {
          body: Json
          created_at: string
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description: string | null
          meta_title: string | null
          page_id: string
          title: string
          updated_at: string
        }
        Insert: {
          body?: Json
          created_at?: string
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          page_id: string
          title: string
          updated_at?: string
        }
        Update: {
          body?: Json
          created_at?: string
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          page_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_translations_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          cover_image_url: string | null
          created_at: string
          id: string
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          type: string
          updated_at: string
        }
        Insert: {
          cover_image_url?: string | null
          created_at?: string
          id?: string
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          type?: string
          updated_at?: string
        }
        Update: {
          cover_image_url?: string | null
          created_at?: string
          id?: string
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      post_tags: {
        Row: {
          post_id: string
          tag_id: string
        }
        Insert: {
          post_id: string
          tag_id: string
        }
        Update: {
          post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      post_translations: {
        Row: {
          body: Json
          created_at: string
          excerpt: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description: string | null
          meta_title: string | null
          post_id: string
          title: string
          updated_at: string
        }
        Insert: {
          body?: Json
          created_at?: string
          excerpt?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          post_id: string
          title: string
          updated_at?: string
        }
        Update: {
          body?: Json
          created_at?: string
          excerpt?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          meta_description?: string | null
          meta_title?: string | null
          post_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_translations_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_id: string | null
          category_id: string | null
          cover_image_url: string | null
          created_at: string
          id: string
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          category_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          id?: string
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          category_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          id?: string
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_metadata: {
        Row: {
          canonical: string | null
          created_at: string
          description: string | null
          id: string
          jsonld: Json | null
          locale: Database["public"]["Enums"]["locale_code"]
          og_image_url: string | null
          route_path: string
          title: string | null
          updated_at: string
        }
        Insert: {
          canonical?: string | null
          created_at?: string
          description?: string | null
          id?: string
          jsonld?: Json | null
          locale: Database["public"]["Enums"]["locale_code"]
          og_image_url?: string | null
          route_path: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          canonical?: string | null
          created_at?: string
          description?: string | null
          id?: string
          jsonld?: Json | null
          locale?: Database["public"]["Enums"]["locale_code"]
          og_image_url?: string | null
          route_path?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      settings: {
        Row: {
          is_public: boolean
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          is_public?: boolean
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          is_public?: boolean
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      success_case_translations: {
        Row: {
          body: Json
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          success_case_id: string
          summary: string | null
          title: string
        }
        Insert: {
          body?: Json
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          success_case_id: string
          summary?: string | null
          title: string
        }
        Update: {
          body?: Json
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          success_case_id?: string
          summary?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "success_case_translations_success_case_id_fkey"
            columns: ["success_case_id"]
            isOneToOne: false
            referencedRelation: "success_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      success_cases: {
        Row: {
          country_origin: string | null
          cover_image_url: string | null
          created_at: string
          display_order: number
          featured: boolean
          id: string
          industry: string | null
          status: Database["public"]["Enums"]["content_status"]
          updated_at: string
          video_url: string | null
          visa_type: Database["public"]["Enums"]["visa_type"] | null
          year: number | null
        }
        Insert: {
          country_origin?: string | null
          cover_image_url?: string | null
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          industry?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
          video_url?: string | null
          visa_type?: Database["public"]["Enums"]["visa_type"] | null
          year?: number | null
        }
        Update: {
          country_origin?: string | null
          cover_image_url?: string | null
          created_at?: string
          display_order?: number
          featured?: boolean
          id?: string
          industry?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          updated_at?: string
          video_url?: string | null
          visa_type?: Database["public"]["Enums"]["visa_type"] | null
          year?: number | null
        }
        Relationships: []
      }
      tag_translations: {
        Row: {
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
          tag_id: string
        }
        Insert: {
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
          tag_id: string
        }
        Update: {
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          name?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tag_translations_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          slug?: string
        }
        Relationships: []
      }
      team_member_translations: {
        Row: {
          bio: string | null
          id: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
          role_title: string | null
          short_bio: string | null
          team_member_id: string
        }
        Insert: {
          bio?: string | null
          id?: string
          locale: Database["public"]["Enums"]["locale_code"]
          name: string
          role_title?: string | null
          short_bio?: string | null
          team_member_id: string
        }
        Update: {
          bio?: string | null
          id?: string
          locale?: Database["public"]["Enums"]["locale_code"]
          name?: string
          role_title?: string | null
          short_bio?: string | null
          team_member_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_member_translations_team_member_id_fkey"
            columns: ["team_member_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string
          display_order: number
          email: string | null
          id: string
          is_active: boolean
          linkedin_url: string | null
          photo_url: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          email?: string | null
          id?: string
          is_active?: boolean
          linkedin_url?: string | null
          photo_url?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          email?: string | null
          id?: string
          is_active?: boolean
          linkedin_url?: string | null
          photo_url?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "editor" | "viewer"
      content_status: "draft" | "published" | "archived"
      locale_code: "pt" | "en" | "es"
      visa_type:
        | "eb2_niw"
        | "eb1"
        | "e2"
        | "l1"
        | "h1b"
        | "o1"
        | "eb5"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "viewer"],
      content_status: ["draft", "published", "archived"],
      locale_code: ["pt", "en", "es"],
      visa_type: ["eb2_niw", "eb1", "e2", "l1", "h1b", "o1", "eb5", "other"],
    },
  },
} as const
