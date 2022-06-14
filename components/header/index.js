import Link from "next/link";
import { useRouter } from "next/router";
import style from "./style";
/** @jsxImportSource @emotion/react */

export default function Header() {
  const { pathname } = useRouter()

  return (
    <nav css={style.navContainer} className="navbar navbar-expand-lg fixed-top">
      <div className="container-lg" css={style.container}>
        <button className="navbar-toggler" css={style.navtoggler}
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="uil uil-bars" css={style.navhambIcon}></span>
        </button>
        <Link href={"/anime"}>
          <a className="navbar-brand" css={style.navbrand}>ANIME</a>
        </Link>
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="navbar-nav">
            <Link href={"/anime"}>
              <a
                css={[style.navItem, pathname === "/anime" && style.active]}
                className="nav-item nav-link">
                Anime List
              </a>
            </Link>
            <Link href={"/collection"}>
              <a css={[style.navItem, pathname === "/collection" && style.active]} 
              className="nav-item nav-link">
                My Collection</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


