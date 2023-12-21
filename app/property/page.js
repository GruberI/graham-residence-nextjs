import Header from "../../components/Property/Header";
import HeaderImage from "../../components/Property/HeaderImage";
import Navigation from '../../components/Property/Navigation'
import Text from '../../components/Property/Text';
import FourImageGrid from '../../components/Property/FourImageGrid'
import Book from '../../components/Property/Book'

export default function Property() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeaderImage />
      <Text />
      <FourImageGrid />
      <Book />
    </div>
  );
}
