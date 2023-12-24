import Table from '../../components/Table'
import { useLoaderData, useNavigation } from 'react-router-dom';
import type { Photo } from '../../misc/types/Photo';

const PhotosPage = () => {
  const photos = useLoaderData() as Photo[];
  const navigation = useNavigation();
  
  return (
    <>
      {navigation.state === 'loading' && 'Loading...'}
      <Table<Photo, keyof Photo>
        columns={[{
          id: 1,
          key: 'thumbnailUrl',
          label: 'Thumbnail'
        },{
          id: 2,
          key: 'title',
          label: 'Title'
        },{
          id: 3,
          key: 'url',
          label: 'URL'
        }]}
        data={photos}
      />
    </>
  );
}

export default PhotosPage
