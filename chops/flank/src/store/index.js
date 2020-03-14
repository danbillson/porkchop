import Client from "shopify-buy"

export const useShopify = async () => {
  const client = Client.buildClient({
    domain: "danbillson.myshopify.com",
    storefrontAccessToken: "e9c2fbbc9d95da824bdd512169613106",
  })

  const checkout = await client.checkout.create()
  const shop = await client.shop.fetchInfo()
  const products = await client.product.fetchAll()

  return { checkout, shop, products }
}
