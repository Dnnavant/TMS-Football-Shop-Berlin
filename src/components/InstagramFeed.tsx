"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
};

type InstagramFeedProps = {
  accessToken?: string;
  userId?: string;
  limit?: number;
};

export default function InstagramFeed({ 
  accessToken, 
  userId = "your-instagram-user-id", 
  limit = 6 
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      // Fallback to mock data when no access token is provided
      setPosts(getMockPosts());
      setLoading(false);
      return;
    }

    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,caption,timestamp,thumbnail_url&limit=${limit}&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error('Instagram API error:', err);
        setError('Unable to load Instagram posts');
        // Fallback to mock data
        setPosts(getMockPosts());
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, userId, limit]);

  const getMockPosts = (): InstagramPost[] => [
    {
      id: "1",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=500&auto=format&fit=crop",
      permalink: "https://instagram.com/p/mock1",
      caption: "New helmet collection just arrived! 🏈 #TMSFootball #Helmets #Safety",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2", 
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
      permalink: "https://instagram.com/p/mock2",
      caption: "Shoulder pad fitting session with the team ⚡ #ShoulderPads #Fitting",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "3",
      media_type: "IMAGE", 
      media_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=500&auto=format&fit=crop",
      permalink: "https://instagram.com/p/mock3",
      caption: "Equipment reconditioning in progress 🔧 #Reconditioning #Service",
      timestamp: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      id: "4",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop", 
      permalink: "https://instagram.com/p/mock4",
      caption: "Team consultation session 📋 #Consulting #TeamWork",
      timestamp: new Date(Date.now() - 259200000).toISOString(),
    },
    {
      id: "5",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=500&auto=format&fit=crop",
      permalink: "https://instagram.com/p/mock5", 
      caption: "O-Zone cleaning service in action 🧽 #OZone #Cleaning",
      timestamp: new Date(Date.now() - 345600000).toISOString(),
    },
    {
      id: "6",
      media_type: "IMAGE",
      media_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=500&auto=format&fit=crop",
      permalink: "https://instagram.com/p/mock6",
      caption: "New arrivals this week! Check out our latest gear 🆕 #NewArrivals",
      timestamp: new Date(Date.now() - 432000000).toISOString(),
    }
  ];

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('de-DE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg aspect-square" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">Showing sample posts below</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Follow us on Instagram</h3>
        <p className="text-gray-600">@tmsfootballshop_berlin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-square">
              <Image
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {post.media_type === "VIDEO" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-2">
                {post.caption ? truncateCaption(post.caption) : 'View on Instagram'}
              </p>
              <p className="text-xs text-gray-500">{formatDate(post.timestamp)}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center">
        <a
          href="https://instagram.com/tmsfootballshop_berlin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Follow @tmsfootballshop_berlin
        </a>
      </div>
    </div>
  );
}
