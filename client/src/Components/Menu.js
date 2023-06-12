import ImageFive from "../pages/Blog/dummyImages/imgFive.png";
import ImageFour from "../pages/Blog/dummyImages/imgFour.jpg";
import ImageThree from "../pages/Blog/dummyImages/imgThree.jpg";
import ImageTwo from "../pages/Blog/dummyImages/imgTwo.jpg";
import ImageOne from "../pages/Blog/dummyImages/imgOne.jpg";
function Menu() {
  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto aliquam, facilis excepturi id asperiores, aut at explicabo sapiente cumque inventore commodi est minus culpa iure numquam, eaque ducimus tempora!",
      image: ImageOne,
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto aliquam, facilis excepturi id asperiores, aut at explicabo sapiente cumque inventore commodi est minus culpa iure numquam, eaque ducimus tempora!",
      image: ImageTwo,
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto aliquam, facilis excepturi id asperiores, aut at explicabo sapiente cumque inventore commodi est minus culpa iure numquam, eaque ducimus tempora!",
      image: ImageThree,
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto aliquam, facilis excepturi id asperiores, aut at explicabo sapiente cumque inventore commodi est minus culpa iure numquam, eaque ducimus tempora!",
      image: ImageFour,
    },
    {
      id: 5,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto aliquam, facilis excepturi id asperiores, aut at explicabo sapiente cumque inventore commodi est minus culpa iure numquam, eaque ducimus tempora!",
      image: ImageFive,
    },
  ];

  return (
    <>
      <div className="menu">
        <h1> Other posts you may</h1>
        {posts.map((item) => (
          <div key={item.id} className="post">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
