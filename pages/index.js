import { slowConnection } from "swr/_internal";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  function pickRandomArtPiece(array) {
    // number between 0 and array.length
    return Math.floor(Math.random() * array.length);
  }

  const indexRandomArtPiece = pickRandomArtPiece(pieces);

  return (
    <div>
      <Spotlight
        image={pieces[indexRandomArtPiece].imageSource}
        artist={pieces[indexRandomArtPiece].artist}
        handleToggleFavorite={handleToggleFavorite}
        slug={pieces[indexRandomArtPiece].slug}
        artPiecesInfo={artPiecesInfo}
        name={pieces[indexRandomArtPiece].name}
        dimensions={pieces[indexRandomArtPiece].dimensions}
      />
    </div>
  );
}
