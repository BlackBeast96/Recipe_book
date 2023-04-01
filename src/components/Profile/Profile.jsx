import { useSelector } from "react-redux"

export default function Profile() {

    const val=useSelector((state)=>{
      return{
        name:state.sign.name,
        password:state.sign.password,
        email:state.sign.email,
        desc:state.sign.desc,
        img:state.sign.img,
      }

    })

    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                {val.desc}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-32 w-32 rounded-full"
                src={val.img}
                alt={val.name}
              />
              <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold  text-gray-900">{val.name}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  