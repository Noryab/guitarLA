import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const Us = () => {
  return (
    <Layout page="Us">
      <main className="contenedor">
        <h2 className="heading">Us</h2>

        <div className={styles.content}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Image about"
          ></Image>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              porta, sapien eget ullamcorper tincidunt, lacus augue elementum
              nisi, nec tempus lectus nibh at nibh. Curabitur posuere quam id
              lorem rhoncus venenatis. Phasellus interdum, augue non vestibulum
              commodo, purus turpis aliquam nulla, id interdum diam massa eget
              eros. Nam eu turpis nec lectus interdum finibus. Pellentesque in
              mi non elit volutpat accumsan. Nulla convallis orci quis hendrerit
              consectetur. Integer ultricies ligula vel maximus venenatis. Ut
              condimentum magna non eleifend bibendum. Vivamus eget viverra
              massa. Vestibulum sed tellus at tellus viverra ultricies ac eget
              urna. Proin rutrum porttitor lacinia.
            </p>
            <p>
              Etiam sed hendrerit nisl. Aenean rhoncus nisi arcu, non volutpat
              libero venenatis quis. Sed auctor, diam ut gravida aliquam, tellus
              mauris pulvinar justo, vitae mattis risus nunc vitae neque.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Integer ac turpis tortor. Fusce
              laoreet ac lorem eu consequat. Vestibulum ac ex eros. Etiam
              efficitur eros a justo bibendum, nec dignissim enim pretium.
              Aenean luctus sodales mollis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Us;
