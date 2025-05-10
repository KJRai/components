import "./index.css";
import Button from "./component/button";
import "./App.css";
import Tabs from "./component/tab";
import Navbar from "./component/navbar";
const tabData = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Story", value: "story" },
];
function App() {
  return (
    <>
      <section
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Button
          variant="filled"
          type="button"
          label="Enquire Now"
          onClick={undefined}
          children={undefined}
        />

        <Button
          variant="outline"
          type="button"
          label="Enquire Now"
          onClick={undefined}
          children={undefined}
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
    </>
  );
}
export default App;
