import "./App.css";
import { ConfigProvider } from "antd"
import PageSideBar from "./Components/PageSideBar/PageSideBar";
import PageHeader from "./Components/PageHeader/PageHeader";
import PageContent from "./Components/PageContent/PageContent";
function App() {

  return (
    <>
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#eb6056dd',
     
        },
      }}
    >
      <div className="App">
        <section className="section-one">
          <PageSideBar />
        </section>
        <section className="section-two">
          <PageHeader />
          <PageContent />
        </section>
      </div>
    </ConfigProvider>
      
    </>
  );
}

export default App;
