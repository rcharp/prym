import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface QuoteFormProps {
  showHeader?: boolean;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteForm = ({ showHeader = true, compact = false, className = "", style }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpWith: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const helpWith = formData.helpWith.trim();

    if (!name || !email || !phone || !helpWith) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionId = crypto.randomUUID();

      // Send confirmation email to the person submitting
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quote-confirmation",
          recipientEmail: email,
          idempotencyKey: `quote-confirm-${submissionId}`,
          templateData: { name },
        },
      });

      // Send notification email to business owner
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quote-notification",
          recipientEmail: "rickycharpentier@gmail.com",
          idempotencyKey: `quote-notify-${submissionId}`,
          templateData: { name, phone, email, helpWith },
        },
      });

      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`rounded-2xl border-2 ${compact ? 'p-5' : 'p-8'} shadow-2xl flex flex-col items-center justify-center text-center ${compact ? 'min-h-[300px]' : 'min-h-[400px]'} ${className}`}
        style={{
          backgroundColor: "hsl(155 55% 18%)",
          borderColor: "hsl(142 70% 45%)",
          ...style,
        }}
      >
        <h2 className="font-heading font-bold text-white text-3xl mb-4">THANK YOU!</h2>
        <p className="text-white/80 text-lg">We got your request and will be in touch shortly!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border-2 ${compact ? 'p-5 space-y-3' : 'p-8 space-y-6'} shadow-2xl ${className}`}
      style={{
        backgroundColor: "hsl(155 55% 18%)",
        borderColor: "hsl(142 70% 45%)",
        ...style,
      }}
    >
      {showHeader && (
        <div className={`text-center ${compact ? 'space-y-2 pb-1' : 'space-y-3 pb-2'}`}>
          <h2 className={`font-heading font-bold text-white ${compact ? 'text-3xl mt-1' : 'text-4xl'}`}>
            Get a Free Quote
          </h2>
        </div>
      )}

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="fullName" className="text-white font-semibold">
          Full Name <span className="text-secondary">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="John Smith"
          required
          maxLength={100}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="email" className="text-white font-semibold">
          Email <span className="text-secondary">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          required
          maxLength={200}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="phone" className="text-white font-semibold">
          Phone <span className="text-secondary">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="numeric"
          placeholder="(888) 123-4567"
          maxLength={10}
          value={formData.phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, phone: digits });
          }}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="helpWith" className="text-white font-semibold">
          What do you need help with? <span className="text-secondary">*</span>
        </Label>
        <Textarea
          id="helpWith"
          placeholder="Describe your property needs and we'll get back to you ASAP!"
          required
          maxLength={1000}
          rows={compact ? 2 : 4}
          value={formData.helpWith}
          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold ${compact ? 'text-base py-4' : 'text-lg py-6'} hover:opacity-90 transition-opacity`}
        style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
      >
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>

      <p className="text-white/50 text-[10px] leading-relaxed text-center">
        By submitting this form, you agree to our Terms &amp; Conditions and Privacy Policy. You consent to receive emails, calls, and text messages from PricedRight Yards &amp; More regarding your inquiry. Message &amp; data rates may apply. You may opt out at any time.
      </p>
    </form>
  );
};

export default QuoteForm;
