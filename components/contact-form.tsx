"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle2, Send } from "lucide-react"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-base font-medium">Name</Label>
        <div className="relative">
          <Input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            className="pl-12 bg-muted/50 border-muted-foreground/20 focus:border-primary h-14 rounded-lg text-base" 
            required 
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="email" className="text-base font-medium">Email</Label>
        <div className="relative">
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Your email address" 
            className="pl-12 bg-muted/50 border-muted-foreground/20 focus:border-primary h-14 rounded-lg text-base" 
            required 
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="subject" className="text-base font-medium">Subject</Label>
        <div className="relative">
          <Input 
            id="subject" 
            name="subject" 
            placeholder="What's this about?" 
            className="pl-12 bg-muted/50 border-muted-foreground/20 focus:border-primary h-14 rounded-lg text-base" 
            required 
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="message" className="text-base font-medium">Message</Label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..." 
            className="pl-12 pt-4 min-h-[180px] bg-muted/50 border-muted-foreground/20 focus:border-primary resize-none rounded-lg text-base" 
            required 
          />
          <div className="absolute left-4 top-4 text-primary/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-medium transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 mt-4" 
        disabled={isLoading || isSuccess}
      >
        {isLoading ? (
          <span className="flex items-center">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </span>
        ) : isSuccess ? (
          <span className="flex items-center text-green-500">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Message Sent!
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </span>
        )}
      </Button>
    </form>
  );
}

