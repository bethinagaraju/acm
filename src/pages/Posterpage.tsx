import EndFooter from '../components/EndFooter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PosterBanner from '../components/PosterBanner';

const Posterpage: React.FC = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      <PosterBanner />
      <div className="flex flex-col items-center justify-center py-24">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Will Update Soon...</h2>
      </div>
    </div>
    <EndFooter />
    </>
  );
};

export default Posterpage;
