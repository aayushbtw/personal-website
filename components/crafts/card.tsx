import Image from "next/image";

export function Card() {
  return (
    <div className="relative overflow-hidden border-4 border-white rounded-4xl">
      <Image
        alt="card-image"
        src="/card.jpg"
        height={640}
        width={800}
        className="w-90 object-cover"
      />

      <div
        className="absolute bottom-0 w-full backdrop-blur-md h-32"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom,transparent 1%,black 50%)",
          maskImage: "linear-gradient(to bottom,transparent 1%,black 50%)",
        }}
      />

      <div className="absolute bottom-0 w-full py-6 px-4 font-sans z-10">
        <h4 className="sm:text-xl text-lg text-balance mb-1.5 font-bold">
          Aayush Agarwal
        </h4>
        <p className="text-balance font-semibold">Full-stack developer</p>
      </div>
    </div>
  );
}
// export function Card() {
//   return (
//     <div className="relative overflow-hidden border-4 border-white rounded-4xl w-80 h-96 bg-[url(/card.jpg)] bg-cover bg-center bg-no-repeat">
//       {/* Blur */}
// <div
//   className="absolute bottom-0 w-full backdrop-blur-md h-32"
//   style={{
//     WebkitMaskImage:
//       "linear-gradient(to bottom,transparent 1%,black 50%)",
//     maskImage: "linear-gradient(to bottom,transparent 1%,black 50%)",
//   }}
// />

//       {/* Content */}
//       <div className="absolute bottom-0 w-full py-6 px-4 font-sans">
//         <h4 className="sm:text-xl text-lg text-balance mb-1.5 font-bold">
//           Aayush Agarwal
//         </h4>
//         <p className="text-balance font-semibold">Full-stack developer</p>
//       </div>
//     </div>
//   );
// }
