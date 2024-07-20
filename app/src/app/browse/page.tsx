import { Session, Stock } from "@/common";
import { getSession } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";
import ChartsComponent from "./ChartsComponent";
import { alpaca } from "@/models/alpaca";
import { AlpacaBar } from "@alpacahq/alpaca-trade-api/dist/resources/datav2/entityv2";

function getYesterdayDate(): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Pad month with leading zero if needed
  const day = currentDate.getDate().toString().padStart(2, '0'); // Pad day with leading zero if needed

  return `${year}-${month}-${day}`;
}

async function getStocks(company: String): Promise<Array<AlpacaBar>> {
  let options = {
    start: "2024-01-01",
    end: getYesterdayDate(),
    timeframe: alpaca.newTimeframe(1, alpaca.timeframeUnit.DAY),
  };
  const stock_gen = alpaca.getBarsV2(company, options);
  const stocks: Array<AlpacaBar> = [];
  for await (const stock of stock_gen) {
    stock["Timestamp"] = new Date(stock["Timestamp"]).toLocaleString();
    stocks.push(stock);
  }
  console.log("company: ", company, "stocks: ", stocks[0]);
  // const generator = await alpaca.getBarsV2("GOOGL", options)

  return stocks;
}


export default async function Browse() {
  const session = await getSession() as Session;
  const { user: { email, name, picture } } = session;



  let options = {
    start: "2024-01-01",
    end: getYesterdayDate(),
    timeframe: alpaca.newTimeframe(1, alpaca.timeframeUnit.DAY),
  };
  const bars = await alpaca.getCryptoBars(["BTC/USD"], options);
  const stocks = (bars.get("BTC/USD"))?.map((stock) => {
    stock["Timestamp"] = new Date(stock["Timestamp"]).toLocaleString();
    return stock;
  }) as Stock[];

  const stocks_googl = await getStocks("GOOGL");
  const amazon_stocks = await getStocks("AMZN");
  const tesla_stocks = await getStocks("TSLA");
  const facebook_stocks = await getStocks("META");
  const apple_stocks = await getStocks("AAPL");
  const nvidia_stocks = await getStocks("NVDA");
  const intel_stocks = await getStocks("INTC");

  return (
    <div className="flex flex-none md:flex-row flex-col h-screen">
      <Sidebar email={email} name={name!} picture={picture!} default_path="/browse" />
      <div className="flex flex-col text-white m-5 md:flex-row md:flex-wrap md:justify-center">
        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={stocks} title="BTC/USD" yDataKey="Close" xDataKey="Timestamp" />
        </div>
        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={stocks_googl} title="GOOGL" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>

        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={amazon_stocks} title="AMZN" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>
        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={tesla_stocks} title="TSLA" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>

        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={facebook_stocks} title="META" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>
        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={apple_stocks} title="APPLE" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>

        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={intel_stocks} title="INTC" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>
        <div className="flex flex-col w-full xl:w-1/2 p-2">
          <ChartsComponent stock_data={nvidia_stocks} title="NVDA" yDataKey="ClosePrice" xDataKey="Timestamp" />
        </div>
      </div>
    </div>
  )
}
