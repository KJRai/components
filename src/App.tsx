import "./index.css";
import Button from "./component/button";
import "./App.css";
import Tabs from "./component/tab";
import Navbar from "./component/navbar";
import Searchbar from "./component/searchbar";
const tabData = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Story", value: "story" },
];
function App() {
  return (
    <>
      <section
        className="flex gap-10"
      >
        <Button
          variant="filled"
          type="button"
          label="Enquire Now"
          onClick={undefined}
        />

        <Button
          variant="outline"
          type="button"
          label="Enquire Now"
          onClick={undefined}
        />
      </section>
      <section
        style={{
          marginTop: "50px",
        }}
      >
        <Tabs tabs={tabData} onTabChange={() => null} />
      </section>
      <section>
        <Navbar />
      </section>
      <section>
        <Searchbar />
      </section>
    </>
  );
}
export default App;
