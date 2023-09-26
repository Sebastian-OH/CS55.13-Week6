import Layout from '../../components/layout';
import { datingData, datingIds } from '../../lib/data2-firebase';

export async function getStaticProps( { params } ) {
  const itemData = await datingData(params.id);
  return {
    props: {
      itemData,
    }
  };
}


export async function getStaticPaths() {
  const paths = await datingIds();
  return {
    paths,
    fallback: false,
  };
}



// export our dynamically routed page component Entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
      <article className="card col-3">
        <div className="card-header text-center">
            {itemData.name}
            <span className="ms-5">{itemData.age}</span>
        </div>
        <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
        <div className="card-body">
          <h5 className>{itemData.description}</h5>
          <h6>Hobbies: {itemData.hobbie}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
        </div>
      </article>
    </Layout>
);
}