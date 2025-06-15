
import { Facebook, Instagram, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface SocialShareProps {
  productUrl?: string;
  title?: string;
}

const SocialShare = ({ productUrl = window.location.href, title = "RevealbyReney - Authentic Ghanaian Fashion" }: SocialShareProps) => {
  const { toast } = useToast();
  
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: productUrl,
        });
      } else {
        await navigator.clipboard.writeText(productUrl);
        toast({
          title: "Link copied!",
          description: "Share the link with your friends",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open("https://www.facebook.com/share/1ATMYYySLz/?mibextid=wwXIfr", "_blank")}
        className="hover:bg-blue-50"
      >
        <Facebook className="h-5 w-5 text-blue-600" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open("https://www.instagram.com/revealbyreney?igsh=YjVxM3l0MnR5cTNr", "_blank")}
        className="hover:bg-pink-50"
      >
        <Instagram className="h-5 w-5 text-pink-600" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={handleShare}
        className="hover:bg-gray-50"
      >
        <Share className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
};

export default SocialShare;
