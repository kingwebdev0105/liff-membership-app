import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./assets/css/App.css";
import "./assets/css/tailwind/tailwind.min.css";
import qrcode from "./assets/image/QR_316339.png"

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <div className="App">
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">居酒屋サンプル</h2>
          </div>
          <div className="mb-10 mx-auto max-w-max overflow-hidden rounded-lg text-center">
            <div className="inline-block py-1 px-3 text-xl leading-5 text-green-500 font-medium uppercase bg-green-100 rounded-full shadow-xl">会員証</div>
            <img className="m-auto" src={qrcode} alt=""/>
            <p className="pb-5 text-sm md:text-xl font-small text-coolGray-400 border-b border-coolGray-100 text-center">来店記録は1店舗1日に1回までとなります。</p>
          </div>

          <div className="mx-auto px-10">

            <h3 className="text-2xl md:text-3xl font-semibold text-coolGray-800">ランク</h3>
            <div className="mx-auto text-center mb-2 bg-green-100 rounded-md shadow-xl">
              <div className="inline-block py-10 px-20 text-xl leading-5 text-green-500 font-bold">&nbsp;ノーマル&nbsp;</div>
            </div>
            <p className="mb-6 text-sm md:text-xl font-small text-coolGray-500">特典：お会計時に1%のポイント還元</p>

            <h3 className="text-2xl md:text-3xl font-semibold text-coolGray-800">ポイント</h3>
            <div className="mx-auto text-center mb-2 bg-gray-100 rounded-md shadow-xl">
              <div className="inline-block py-10 px-20 text-xl leading-5 text-gray-500 font-bold">123,567&nbsp;point</div>
            </div>
            <p className="mb-6 text-sm md:text-xl font-small text-coolGray-500">次のランクまで、あと 123,456&nbsp;point</p>

            <h3 className="text-2xl md:text-3xl font-semibold text-coolGray-800">クーポン</h3>
            <p className="mb-6 text-sm md:text-xl font-small text-coolGray-500">現在、配信されたクーポンはありません。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
