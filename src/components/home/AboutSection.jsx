// src/components/home/AboutSection.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Landmark, Factory } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import testImage from '../../assets/images/test.jpg';

// TODO: ganti dengan foto lain jika perlu
const aboutImage = testImage;

export default function AboutSection() {
  const { language } = useLanguage();
  const en = language === 'en';

  const points = [
    {
      icon: Landmark,
      title: en ? 'Listed since 2013' : 'Tercatat di BEI sejak 2013',
      text: en ? 'Publicly traded on the Indonesia Stock Exchange under the ticker CANI.' : 'Emiten terbuka dengan kode saham CANI di Bursa Efek Indonesia.',
    },
    {
      icon: ShieldCheck,
      title: en ? 'Cabotage-compliant fleet' : 'Armada patuh kabotase',
      text: en ? 'Every vessel is Indonesian flagged and operated to national standards.' : 'Seluruh kapal berbendera Indonesia dan dioperasikan sesuai standar nasional.',
    },
    {
      icon: Factory,
      title: en ? 'Energy and mining focus' : 'Fokus migas dan tambang',
      text: en ? 'Marine support for oil & gas operators and bulk commodity producers.' : 'Dukungan maritim bagi operator migas dan produsen komoditas curah.',
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[6px] border border-[#C0392B]/60" aria-hidden="true" />
            <img
              src={aboutImage}
              alt={en ? 'Vessels of PT Capitol Nusantara Indonesia Tbk at work' : 'Kapal PT Capitol Nusantara Indonesia Tbk sedang beroperasi'}
              className="relative aspect-[4/5] w-full rounded-[6px] object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -left-3 bottom-8 bg-[#1E2A3A] px-5 py-3 text-white shadow-lg sm:-left-6">
              <div className="font-display text-2xl font-semibold leading-none">2004</div>
              <div className="mt-1 text-xs text-[#B8975A]">{en ? 'Since 2004' : 'Sejak 2004'}</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="mb-5 block h-[2px] w-10 bg-[#C0392B]" />
            <p className="mb-3 text-sm font-semibold tracking-wide text-[#C0392B]">{en ? 'About us' : 'Tentang kami'}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-[#1E2A3A] sm:text-4xl lg:text-[2.75rem]">
              {en ? 'Two decades supporting Indonesia’s maritime logistics' : 'Dua dekade mendukung logistik maritim Indonesia'}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-slate-600">
              {en
                ? 'Founded in 2004, PT Capitol Nusantara Indonesia Tbk operates a modern fleet of anchor handling tugs, tug boats, floating cranes and barges, serving the oil & gas and mining sectors across the archipelago.'
                : 'Berdiri sejak 2004, PT Capitol Nusantara Indonesia Tbk mengoperasikan armada modern berupa kapal AHT, kapal tunda, derek terapung, dan tongkang untuk melayani sektor migas dan pertambangan di seluruh nusantara.'}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {points.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={0.1 * i} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-[#1E2A3A] text-[#E74C3C]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1E2A3A]">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[#1E2A3A] px-6 py-3 text-sm font-semibold text-[#1E2A3A] transition-colors hover:bg-[#1E2A3A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
            >
              <span>{en ? 'Company profile' : 'Profil perusahaan'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}