import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      <a>Dawid Trynkiewicz</a>
    
        <ItemList items={["test","test2"]} />

        <TextBlock heading={"Test"} content={"Content"} />

        <ImageWithText imageUrl={"https://shorturl.at/wk0mc"} text = {"Mercedes G-class"}  />
        


      </main>
  
    </div>
  );
}
