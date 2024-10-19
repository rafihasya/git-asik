import Card from './components/Card';

export default function Product() {
  return (
    <section className="flex flex-col w-fit mx-auto p-8">
      <div className="flex flex-row justify-between items-center py-4">
        <p className="text-xl">Wishlist (4)</p>
        <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">Move All To Bag</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/tas-gucci.png" alt="Tas Gucci" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Gucci duffle bag</p>
            <p className="text-rose-600">$960</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/cpu-cooler.png" alt="CPU Cooler" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">RGB liquid CPU Cooler</p>
            <p className="text-rose-600">$1960</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/stick.png" alt="Gamepad" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">GP11 Shooter USB Gamepad</p>
            <p className="text-rose-600">$550</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
              <img src="./assets/jacket.png" alt="Satin Jacket" />
            </figure>
            <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
              <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Quilted Satin Jacket</p>
            <p className="text-rose-600">$750</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
