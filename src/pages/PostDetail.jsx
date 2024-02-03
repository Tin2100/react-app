import React from 'react'
import PostAuthor from '../Components/PostAuthor';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/blog11.jpg';

const PostDetail = () => {
  return (
      <section className='post-detail'>
        <div className="container post-detail_container">
          <div className="post-detail_header">
            <PostAuthor />
            <div className="post-detail_buttons">
              <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
              <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
            </div>
          </div>
          <h1>This is the post title</h1>
          <div className="post-detail_thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero accusantium commodi reprehenderit cumque consequatur delectus exercitationem vel quos ad minus aliquam eum voluptatum soluta, est eius quia fuga dignissimos repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore, id numquam odit voluptatem amet recusandae sint ex earum. Eius enim repudiandae, omnis doloremque, consequuntur unde inventore voluptate harum veniam eaque tenetur rerum quidem culpa voluptates quisquam in dolore ad sequi nostrum itaque nemo? Eligendi soluta aspernatur fugiat facere consequuntur dolores dolorem architecto, atque porro.

          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque facere, quidem reiciendis cupiditate hic mollitia, laboriosam expedita minima omnis, optio ullam ab dicta quisquam! Quis laudantium officia, repudiandae ratione harum eum odit tenetur inventore atque. Deserunt natus, autem iure id sequi, quisquam eaque aperiam nam architecto atque pariatur ad cumque quo in molestiae dolores cupiditate. Itaque est corporis ipsam doloremque magni ea? Hic voluptatem ad numquam, eum, quam omnis distinctio officia debitis corporis voluptatibus, animi amet ratione fugiat tempora dignissimos repellat aperiam eligendi nihil? Sapiente, minima quo mollitia corrupti quisquam accusantium veritatis incidunt dignissimos quia quis distinctio sed ducimus temporibus, rerum qui sunt molestiae aliquam. Voluptatum optio nam quas facilis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur animi debitis cumque harum omnis temporibus numquam dignissimos unde nostrum? Quo expedita aut aliquid porro deleniti. Atque a repudiandae dicta, sapiente ratione perspiciatis eius nesciunt repellat assumenda veritatis ad sunt omnis ex in et quo laborum id officia! Dolorem quasi quibusdam amet at explicabo nesciunt earum totam perspiciatis est facere! Quaerat non deserunt vero amet minus qui labore saepe laboriosam repellendus delectus id nostrum quam voluptas animi iste nobis, dignissimos fuga in ipsam similique. Ad fugit enim nemo voluptatum necessitatibus numquam itaque! Officia omnis odit ratione numquam vel fugiat voluptas, dolorum eius consequuntur maiores nobis quaerat! Iusto ipsam dolorem, minima illum asperiores, molestias debitis labore quae provident eius doloremque voluptate. Laborum, eligendi.
        </p>
        </div>

      </section>
    )
}

export default PostDetail