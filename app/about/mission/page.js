import Button from '@/app/components/Button';

import thumb from '@/public/images/twitter-card.png';
import Image from 'next/image';

export default function Mission() {
  return (
    <main>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        recusandae soluta maxime quasi. Pariatur aliquid tempora architecto sunt
        quos eos debitis quo temporibus autem repellendus quibusdam voluptatem
        omnis aliquam amet officiis tempore sequi corrupti provident dolorem,
        excepturi commodi praesentium. Veniam illo, quos possimus natus
        excepturi similique tempore perspiciatis architecto non vel cupiditate
        praesentium doloremque officiis sapiente totam corrupti eum ipsam
        repellendus. Incidunt rerum quaerat, ut exercitationem consectetur modi
        explicabo porro, voluptas totam alias in deserunt commodi, cumque
        beatae. Quia, quisquam eveniet. Nesciunt quis expedita facilis. Dolor
        quo debitis nostrum. Mollitia amet dignissimos pariatur quis nihil at
        similique ducimus expedita soluta.
      </div>
      <div className="w-[400px">
        <Image placeholder="blur" src={thumb} alt="Thumb image" />
      </div>
      <Button />
    </main>
  );
}
