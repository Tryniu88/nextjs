import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import styles from "./page.module.css"
import SimpleForm from "./components/SimpleForm";
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObject";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      <a>Dawid Trynkiewicz</a>
    
        <ItemList items={["test","test2"]} />

        <TextBlock heading={"Test"} content={"Content"} />

        <ImageWithText imageUrl={"https://shorturl.at/wk0mc"} text = {"Mercedes G-class"}  />
        
        <SimpleForm label={"input"} placeholder={"type text..."}/>

      <ConditionalDisplay isVisible={false}  />
      

        <ListWithObjects items={[{name:"jeden" , value:"value"}]}/>




      </main>
  
    </div>
  );
}
