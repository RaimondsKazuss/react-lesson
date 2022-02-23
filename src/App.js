import ContentContainer from './components/ContentContainer/ContentContainer';
import HighLightCard from './components/HighightCard/HighLightCard';
import Nav from './components/Nav/Nav';

const cardData = [
  {
    id: 1,
    title: "card one",
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=220:*"
  },
  {
    id: 2,
    title: "card two",
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=220:*"
  },
  {
    id: 3,
    title: "card three",
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=220:*"
  }
]

function App() {
  return (
    <div className="App">
      <Nav/>
      <ContentContainer>
        {cardData.map((card) => {
          return <HighLightCard key={card.id} title={card.title} src={card.imgSrc}/>
        })}
      </ContentContainer>
    </div>
  );
}

export default App;
