import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMyCart } from "@/lib/actions/sellercart.actions";

export default async function CartButton() {
  const cart = await getMyCart();
  return (
    <Button asChild variant="ghost" aria-label="cart">
      <Link href="/cart">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />

        {cart && cart.items.length > 0 && (
          <Badge className="ml-1">
            {cart.items.reduce((a: any, c: { qty: any; }) => a + c.qty, 0)}
          </Badge>
        )}
      </Link>
    </Button>
  );
}
