import React from 'react';

// package
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  // states
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  // loader
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  // error
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        useGetArtistDetailsQuery={useGetArtistDetailsQuery}
      />
    </div>
  );
};

export default ArtistDetails;
