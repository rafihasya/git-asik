export default function Product() {
  return (
    <section className="flex flex-col w-fit mx-auto p-8">
      <div className="flex flex-row justify-between items-center py-4">
        <p className="text-xl">Wishlist (4)</p>
        <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">Move All To Bag</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/tas-gucci.png" alt="tas gucci" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Gucci Duffle Bag</p>
            <p className="text-rose-600">$180</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/cpu-cooler.png" alt="cooler" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Cooler</p>
            <p className="text-rose-600">$4000</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/stick.png" alt="stick gamepad" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Gamepad</p>
            <p className="text-rose-600">$2000</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/jacket.png" alt="jacket" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Satin Jacket</p>
            <p className="text-rose-600">$20</p>
          </div>
        </div>
      </div>
    </section>
  );
}
