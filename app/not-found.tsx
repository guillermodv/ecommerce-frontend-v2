const imageUrl: string =
  "https://www.fierrosclasicos.com/wp-content/uploads/2012/12/171.jpg";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center">
      <h5 className="text-black text-center mb-4">404 chopan</h5>
      <img src={imageUrl} />
    </div>
  );
}
