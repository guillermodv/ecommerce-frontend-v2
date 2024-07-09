import LABELS from "./constants/label";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col">
          <h5 className="font-bold text-center py-2 text-black">
            {LABELS.WELCOME_LABEL}
          </h5>
          <p className="text-center pb-3 text-black">{LABELS.DESCRIPTION}</p>
        </div>
      </section>
    </main>
  );
}
