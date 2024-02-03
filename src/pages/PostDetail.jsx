import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog2.jpg'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>Lorem ipsum</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam, sequi voluptate esse atque recusandae temporibus officia, est, itaque voluptas enim! Dolorem numquam corporis voluptas! Quis, mollitia, iste id eos corrupti modi quia esse nam temporibus omnis in odit! Unde a totam nesciunt enim perferendis quis adipisci tempora at culpa, molestiae explicabo, corporis laborum nemo delectus atque voluptate rem error! Dolorum commodi laborum eos saepe consectetur! Sed dicta molestiae laborum laboriosam eos officia beatae deleniti nisi perferendis, repellendus velit cupiditate eius sit blanditiis vero error accusamus porro corrupti amet? Voluptatem enim quam saepe accusantium consequuntur consectetur, asperiores atque voluptas nihil facilis expedita similique molestias aperiam vero esse, voluptate tenetur nisi tempora eligendi quae reiciendis placeat! Voluptas dolores, nam dicta aliquid maiores molestiae non quis in, dignissimos unde voluptate, iure placeat rerum fugiat vel nostrum optio consectetur expedita amet necessitatibus. Corporis, voluptatibus vero, sequi voluptate soluta necessitatibus eos ipsa magnam beatae, officia quisquam adipisci doloribus nisi laboriosam rerum qui minima excepturi animi. Laboriosam nemo molestias eaque deserunt explicabo harum id sint veritatis sequi, ut assumenda numquam nisi dolorem. Dicta aut voluptatibus animi itaque odit saepe dolores aliquam blanditiis? Laborum quis ut rerum, nihil voluptas facere eligendi illo deleniti earum maiores ea rem minima voluptatum dolores error perspiciatis iure fugit possimus quisquam quas molestias nisi explicabo dolorum. Inventore ipsam, molestiae amet provident sapiente corrupti ad cum enim ullam velit voluptate modi natus culpa beatae, asperiores tempore expedita iusto delectus recusandae nobis magni perferendis nemo mollitia illo. Placeat quibusdam eos voluptatem aperiam, porro vitae dolores ipsa, fuga optio facilis consequatur odit corporis itaque? Omnis, illum ipsum ab quod eligendi nisi obcaecati odio, quibusdam nihil delectus rem neque quam repellat harum expedita, suscipit natus deleniti quaerat incidunt! Magni provident aliquam natus velit, explicabo, nobis, odio enim quae nam ipsa id? Nulla mollitia quam voluptatum?
     </p>
     <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero impedit doloribus repellendus laudantium porro temporibus, maxime dignissimos deleniti tenetur quod fuga perspiciatis aliquid placeat assumenda, excepturi rerum ipsa nemo veniam amet ipsum? Sint quaerat dolores voluptas consequatur cumque eaque architecto, necessitatibus unde! Illo, rerum? Eaque enim cumque provident nostrum doloribus itaque veritatis molestias nulla nihil, sapiente sequi deserunt, voluptates amet quos a ea! Eos officiis placeat natus quibusdam, voluptatem, blanditiis quia aut illo corrupti a omnis saepe voluptatum repudiandae consectetur fugiat! Vel magni, suscipit aliquid quasi cum eaque voluptas itaque nisi nostrum fugit aspernatur reiciendis quidem porro harum tenetur quaerat. Obcaecati iusto quam sapiente consectetur, nulla, fuga, velit quis ad magni sunt aspernatur numquam. Nulla nisi molestiae quae illo facere corporis suscipit voluptate consequatur impedit blanditiis, accusantium rem at commodi animi facilis porro soluta mollitia laudantium vitae autem velit voluptatem tempore reprehenderit accusamus! Tempore corporis, inventore sint esse obcaecati maxime, aperiam cum dicta pariatur soluta, maiores commodi? Harum voluptate, voluptatem dolor omnis impedit quibusdam inventore odio quis nesciunt hic exercitationem iste cum dolores voluptatum quia provident, deleniti accusantium saepe? Sequi quisquam vero impedit quia beatae eum veniam quidem culpa dolores fugit officiis laboriosam possimus officia, odit ratione error vel accusantium cum. Quae, nulla a, veritatis dolorum doloribus exercitationem illum nisi suscipit vel libero, cupiditate recusandae incidunt? Velit voluptatum magnam esse commodi fugiat.
     </p>
      </div>

    </section>
  )
}

export default PostDetail
