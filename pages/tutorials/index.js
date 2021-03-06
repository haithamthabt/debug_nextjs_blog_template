import Layout from '@/components/Layout';
import Link from 'next/link';
import { POSTS_PER_PAGE_HOME } from "@_data/config/index";
import { getTutorials } from '@/utils/tutorials';

export default function TutorialsPage({tutorials}) {


  console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttt")
  console.log(tutorials)
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Tutorials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutorials.map((tutorial, index) => (
          <Link href={`tutorials/css/${tutorial.slug}`}>
          {tutorial.frontmatter.title}
          </Link>
        )) }
      </div>
    </Layout>
  )
}

export async function getStaticProps(){

  console.log("I am here ------------------------------")
  console.log(getTutorials())

  return {
      props: {
          tutorials: getTutorials(),
      },
  }
}




