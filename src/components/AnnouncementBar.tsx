import sales from "@/data/sales.json";

export default function AnnouncementBar() {
  if (!sales.announcement) return null;
  return (
    <div className="bg-amber-100 text-amber-900 text-center text-sm py-2">
      {sales.announcement}
    </div>
  );
}
