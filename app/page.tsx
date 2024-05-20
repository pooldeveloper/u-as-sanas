import Layout from "@/components/layout/Layout"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* Header*/}
      <header className="bg-dark py-5 bg-image">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Uñas Sanas</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Te cuidamos y embellecemos, priorizando tu bienestar y la prevención de hongos en tus uñas
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <Image
                  className="card-img-top"
                  src="/terbinafina.png"
                  alt="Imagen de Gotas Terbinafina 8%"
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Terbinafina 8%</h5>
                    {/* Product price*/}
                    S/40
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex gap-4 justify-content-center">
                    <Link className="btn btn-outline-dark mt-auto" href="/terbinafina">
                      Ver
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=51959856064">
                      <button type="button" className="btn btn-success">
                        <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <Image
                  className="card-img-top"
                  src="/laca.png"
                  alt="Imagen de Laca Terbinafina 8%"
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Laca Terbinafina 8%</h5>
                    {/* Product price*/}
                    S/50
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex gap-4 justify-content-center">
                    <Link className="btn btn-outline-dark mt-auto" href="/terbinafina">
                      Ver
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=51959856064">
                      <button type="button" className="btn btn-success">
                        <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <Image
                  className="card-img-top"
                  src="/maquina.png"
                  alt="Imagen de Maquina para Limar Uñas"
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Maquina Lima Uñas</h5>
                    {/* Product price*/}
                    S/60
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex gap-4 justify-content-center">
                    <Link className="btn btn-outline-dark mt-auto" href="/terbinafina">
                      Ver
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=51959856064">
                      <button type="button" className="btn btn-success">
                        <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <Image
                  className="card-img-top"
                  src="/crema.png"
                  alt="Imagen de Crema Terbinafina 8%"
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Crema Terbinafina 8%</h5>
                    {/* Product price*/}
                    S/50
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex gap-4 justify-content-center">
                    <Link className="btn btn-outline-dark mt-auto" href="/terbinafina">
                      Ver
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=51959856064">
                      <button type="button" className="btn btn-success">
                        <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <Image
                  className="card-img-top"
                  src="/callos.png"
                  alt="Imagen de Crema Para Callos"
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Crema Para Callos</h5>
                    {/* Product price*/}
                    S/50
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="d-flex gap-4 justify-content-center">
                    <Link className="btn btn-outline-dark mt-auto" href="/terbinafina">
                      Ver
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=51959856064">
                      <button type="button" className="btn btn-success">
                        <Image src="/WhatsApp.svg.webp" alt="WhatsApp Uñas Sanas" width="30" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
