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
      blogs: {
        Row: {
          author_id: string | null
          content_md: string
          cover_image_url: string | null
          created_at: string | null
          id: string
          is_ai_generated_recap: boolean | null
          published_at: string | null
          reviewer_id: string | null
          status: Database["public"]["Enums"]["blog_status"] | null
          tags: string[] | null
          title: string
          view_count: number | null
        }
        Insert: {
          author_id?: string | null
          content_md: string
          cover_image_url?: string | null
          created_at?: string | null
          id?: string
          is_ai_generated_recap?: boolean | null
          published_at?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["blog_status"] | null
          tags?: string[] | null
          title: string
          view_count?: number | null
        }
        Update: {
          author_id?: string | null
          content_md?: string
          cover_image_url?: string | null
          created_at?: string | null
          id?: string
          is_ai_generated_recap?: boolean | null
          published_at?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["blog_status"] | null
          tags?: string[] | null
          title?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blogs_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          banner_url: string | null
          conducted_by: string | null
          created_by: string | null
          description: string | null
          end_datetime: string | null
          feedback_sent: boolean | null
          google_form_link: string | null
          id: string
          max_participants: number | null
          prize_details: string | null
          recap_blog_id: string | null
          registered_users: string[] | null
          registration_deadline: string | null
          start_datetime: string | null
          status: Database["public"]["Enums"]["event_status"] | null
          tags: string[] | null
          title: string
          type: Database["public"]["Enums"]["event_type"]
          venue: string | null
        }
        Insert: {
          banner_url?: string | null
          conducted_by?: string | null
          created_by?: string | null
          description?: string | null
          end_datetime?: string | null
          feedback_sent?: boolean | null
          google_form_link?: string | null
          id?: string
          max_participants?: number | null
          prize_details?: string | null
          recap_blog_id?: string | null
          registered_users?: string[] | null
          registration_deadline?: string | null
          start_datetime?: string | null
          status?: Database["public"]["Enums"]["event_status"] | null
          tags?: string[] | null
          title: string
          type: Database["public"]["Enums"]["event_type"]
          venue?: string | null
        }
        Update: {
          banner_url?: string | null
          conducted_by?: string | null
          created_by?: string | null
          description?: string | null
          end_datetime?: string | null
          feedback_sent?: boolean | null
          google_form_link?: string | null
          id?: string
          max_participants?: number | null
          prize_details?: string | null
          recap_blog_id?: string | null
          registered_users?: string[] | null
          registration_deadline?: string | null
          start_datetime?: string | null
          status?: Database["public"]["Enums"]["event_status"] | null
          tags?: string[] | null
          title?: string
          type?: Database["public"]["Enums"]["event_type"]
          venue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          comments: string | null
          event_id: string | null
          id: string
          rating: number | null
          submitted_at: string | null
          user_id: string | null
        }
        Insert: {
          comments?: string | null
          event_id?: string | null
          id?: string
          rating?: number | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Update: {
          comments?: string | null
          event_id?: string | null
          id?: string
          rating?: number | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_folders: {
        Row: {
          created_at: string | null
          description: string | null
          drive_link: string
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          drive_link: string
          id?: string
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          drive_link?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      mentors: {
        Row: {
          availability: string | null
          id: string
          is_alumni: boolean | null
          sessions_completed: number | null
          topics: string[] | null
          user_id: string | null
        }
        Insert: {
          availability?: string | null
          id?: string
          is_alumni?: boolean | null
          sessions_completed?: number | null
          topics?: string[] | null
          user_id?: string | null
        }
        Update: {
          availability?: string | null
          id?: string
          is_alumni?: boolean | null
          sessions_completed?: number | null
          topics?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notices: {
        Row: {
          attachment_link: string | null
          category: string | null
          content: string | null
          created_at: string | null
          id: string
          title: string
        }
        Insert: {
          attachment_link?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          title: string
        }
        Update: {
          attachment_link?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      opportunities: {
        Row: {
          created_at: string | null
          deadline: string | null
          description: string
          external_link: string
          id: string
          status: Database["public"]["Enums"]["opp_status"] | null
          submitted_by: string | null
          title: string
          type: Database["public"]["Enums"]["opp_type"]
        }
        Insert: {
          created_at?: string | null
          deadline?: string | null
          description: string
          external_link: string
          id?: string
          status?: Database["public"]["Enums"]["opp_status"] | null
          submitted_by?: string | null
          title: string
          type: Database["public"]["Enums"]["opp_type"]
        }
        Update: {
          created_at?: string | null
          deadline?: string | null
          description?: string
          external_link?: string
          id?: string
          status?: Database["public"]["Enums"]["opp_status"] | null
          submitted_by?: string | null
          title?: string
          type?: Database["public"]["Enums"]["opp_type"]
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          blogs_authored: string[] | null
          email: string
          events_participated: string[] | null
          id: string
          interests: string[] | null
          joined_at: string | null
          name: string
          projects_contributed: string[] | null
          role: Database["public"]["Enums"]["user_role"] | null
        }
        Insert: {
          avatar_url?: string | null
          blogs_authored?: string[] | null
          email: string
          events_participated?: string[] | null
          id: string
          interests?: string[] | null
          joined_at?: string | null
          name: string
          projects_contributed?: string[] | null
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Update: {
          avatar_url?: string | null
          blogs_authored?: string[] | null
          email?: string
          events_participated?: string[] | null
          id?: string
          interests?: string[] | null
          joined_at?: string | null
          name?: string
          projects_contributed?: string[] | null
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          authors: string[] | null
          created_at: string | null
          demo_url: string | null
          description: string | null
          id: string
          is_featured: boolean | null
          repo_url: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          authors?: string[] | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          repo_url?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          authors?: string[] | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          repo_url?: string | null
          tags?: string[] | null
          title?: string
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
      blog_status: "draft" | "under_review" | "published" | "featured"
      event_status: "draft" | "published" | "ongoing" | "completed" | "archived"
      event_type:
        | "quiz"
        | "workshop"
        | "guest_lecture"
        | "competition"
        | "other"
      opp_status: "pending_review" | "published" | "expired"
      opp_type:
        | "internship"
        | "hackathon"
        | "competition"
        | "research"
        | "other"
      user_role: "public" | "member" | "core_team" | "admin"
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
      blog_status: ["draft", "under_review", "published", "featured"],
      event_status: ["draft", "published", "ongoing", "completed", "archived"],
      event_type: ["quiz", "workshop", "guest_lecture", "competition", "other"],
      opp_status: ["pending_review", "published", "expired"],
      opp_type: ["internship", "hackathon", "competition", "research", "other"],
      user_role: ["public", "member", "core_team", "admin"],
    },
  },
} as const
