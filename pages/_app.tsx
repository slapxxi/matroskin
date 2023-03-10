// css
import 'styles/globals.scss';
import 'styles/App.scss';
import 'components/Badge.scss';
import 'components/KeyValueTable.scss';
import 'components/Breadcrumbs.scss';
import 'components/Button.scss';
import 'components/Navbar.scss';
import 'components/Tag.scss';
// components
import { Badge } from 'components/Badge';
import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { PinIcon } from 'components/icons/PinIcon';
import { ViberIcon } from 'components/icons/ViberIcon';
import { VkIcon } from 'components/icons/VkIcon';
import { Logo } from 'components/Logo';
import { Modal } from 'components/Modal';
import { NavbarSpacer } from 'components/NavbarSpacer';
import { Responsive } from 'components/Responsive';
import { Strong } from 'components/Strong';
import { Text } from 'components/Text';
import { TextLink } from 'components/TextLink';
import {
  Heart as HeartIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  User as UserIcon,
} from 'lucide-react';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import Link from 'next/link';

const App: AppType = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0b0b16" />
      </Head>

      <Component {...pageProps} />

      <footer className="rounded-t-2xl bg-black py-9 md:pb-0">
        <div className="cont footer__bg flex flex-col">
          <div className="lg:flex lg:justify-between">
            <div className="gap-2 md:flex lg:flex-1">
              <div className="md:w-min">
                <Logo width={240} variant="dark" />
                <Text className="footer__text footer__section pt-4">
                  Товары для животных и груминг салон в Нижневартовске, бесплатная доставка при покупке от
                  2000₽
                </Text>
              </div>
              <div className="footer__section flex justify-between md:flex-1 md:justify-around">
                <div>
                  <h2 className="footer__title my-4 md:mt-0">Категории</h2>
                  <ul className="footer__list footer__text">
                    <li>
                      <Link href="#">Для собак</Link>
                    </li>
                    <li>
                      <Link href="#">Для кошек</Link>
                    </li>
                    <li>
                      <Link href="#">Для птиц</Link>
                    </li>
                    <li>
                      <Link href="#">Для грызунов</Link>
                    </li>
                    <li>
                      <Link href="#">Для рыбок</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="footer__title my-4 md:mt-0">Покупателям</h2>
                  <ul className="footer__list footer__text">
                    <li>
                      <Link href="#">Акции</Link>
                    </li>
                    <li>
                      <Link href="#">Новинки</Link>
                    </li>
                    <li>
                      <Link href="#">Груминг</Link>
                    </li>
                    <li>
                      <Link href="#">Контакты</Link>
                    </li>
                    <li>
                      <Link href="#">Доставка</Link>
                    </li>
                    <li>
                      <Link href="#">Адреса магазинов</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Divider height={1} color="darkGray-600" className="footer__section md:my-7 lg:hidden" />

            <div className="lg:basis-4/12">
              <h2 className="footer__title md:my-2.5 lg:my-0">Контакты</h2>

              <div className="gap-12 md:flex lg:flex-col lg:gap-4">
                <div className="footer__section lg:flex lg:items-center lg:gap-4">
                  <div className="flex items-center justify-between lg:flex-1">
                    <Strong className="footer__strong">+7 (982) 537-81-27</Strong>
                    <div className="flex gap-2.5">
                      <Button variant="circle-outline">
                        <ViberIcon className="footer__icon" size={20} />
                      </Button>
                      <Button variant="circle-outline">
                        <VkIcon className="footer__icon" size={20} />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="footer__button my-4 md:my-0 md:mt-4 md:w-full lg:mt-0 lg:w-auto"
                  >
                    Запись онлайн
                  </Button>
                </div>

                <ul className="footer__section flex flex-col gap-2.5 md:flex-1">
                  {[
                    { address: 'Северная улица, 74А', phoneNumber: '27-85-27', workingHours: '9:00 - 21:00' },
                    { address: 'Омская улица, 12', phoneNumber: '27-85-27', workingHours: '10:00 - 21:00' },
                    {
                      address: 'Профсоюзная улица, 7',
                      phoneNumber: '27-85-27',
                      workingHours: '10:00 - 21:00',
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col gap-1.5 rounded-2xl bg-darkGray-400 p-5 md:flex-row md:justify-between md:gap-4 md:p-2"
                    >
                      <div className="flex items-center gap-1.5 md:flex-1">
                        <PinIcon size={18} className="text-mediumBlue-500" />
                        <Responsive component={Text} className="text-white" size="xs" md={{ size: 'sm' }}>
                          {item.address}
                        </Responsive>
                      </div>
                      <div className="flex items-center gap-1.5 md:flex-1 md:justify-around">
                        <div className="flex gap-1.5">
                          <ViberIcon size={18} className="text-white" />
                          <Responsive component={Text} className="text-white" size="xs" md={{ size: 'sm' }}>
                            {item.phoneNumber}
                          </Responsive>
                        </div>
                        <Responsive
                          component={Text}
                          className="text-darkGray-200"
                          size="xs"
                          md={{ size: 'sm' }}
                        >
                          {item.workingHours}
                        </Responsive>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Divider height={1} color="darkGray-600" className="mt-12 hidden md:block" />

          <div className="items-center justify-between md:my-8 md:flex">
            <SupportedPaymentMethods className="my-12 md:my-0 lg:order-2" />
            <Divider height={1} color="darkGray-600" className="footer__section md:hidden" />

            <div className="footer__section lg:order-1">
              <Responsive component={Text} className="text-darkGray-300" size="xs" md={{ size: 'sm' }}>
                &copy; ООО «Матроскин»
              </Responsive>
              <TextLink href="#" className="text-darkGray-300">
                <Responsive component={Text} size="xs" md={{ size: 'sm' }}>
                  Политика конфиденциальности
                </Responsive>
              </TextLink>
            </div>
          </div>

          <NavbarSpacer />
        </div>
      </footer>

      <Modal open>
        <nav className="fixed bottom-0 z-10 flex w-full rounded-t-xl bg-white p-3 px-0 pt-4 md:hidden">
          <Link href="#" className="flex flex-1 flex-col items-center justify-center gap-1">
            <SearchIcon />
            <Text className="text-darkGray-200" size="sm">
              Поиск
            </Text>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-center gap-1">
            <UserIcon />
            <Text className="text-darkGray-200" size="sm">
              Войти
            </Text>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-center gap-1">
            <HeartIcon className="overflow-visible">
              <Badge backgroundColor="blue" r={20} fontWeight={700}>
                10
              </Badge>
            </HeartIcon>
            <Text className="text-darkGray-200" size="sm">
              Избранное
            </Text>
          </Link>
          <Link href="#" className="flex flex-1 flex-col items-center justify-center gap-1">
            <ShoppingCartIcon />
            <Text className="text-darkGray-200" size="sm">
              Корзина
            </Text>
          </Link>
        </nav>
      </Modal>
    </>
  );
};

const SupportedPaymentMethods = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={321} height={22} fill="none" {...props}>
    <path
      fill="#A9A9A9"
      d="M71.01 17.67a9.62 9.62 0 0 0 3.13-7.07 9.45 9.45 0 0 0-3.13-7.07A9.58 9.58 0 1 0 64.6 20.2a9.96 9.96 0 0 0 6.42-2.53Z"
    />
    <path fill="#A9A9A9" d="M71.01 17.67a9.62 9.62 0 0 0 3.14-7.07A9.45 9.45 0 0 0 71 3.53" />
    <path
      stroke="#3362AB"
      strokeWidth={0.17}
      d="M71.01 17.67a9.62 9.62 0 0 0 3.14-7.07A9.45 9.45 0 0 0 71 3.53"
    />
    <path
      fill="#6A6A6A"
      d="M77.43 1a9.56 9.56 0 0 0-7.38 3.49h1.92c.26.3.5.65.71 1H69.3c-.2.3-.4.66-.56 1.02h4.5c.15.35.3.65.4 1h-5.3l-.3 1.02h5.85c.15.65.2 1.31.2 2.02 0 1.06-.15 2.07-.5 3.03h-5.3c.1.35.25.7.4 1h4.5c-.16.36-.36.72-.56 1.02h-3.38c.2.35.45.7.7 1h1.92c-.3.36-.6.72-.96 1.02a9.55 9.55 0 0 0 15.96-7.12A9.35 9.35 0 0 0 77.43 1Z"
    />
    <path
      fill="#fff"
      d="M63.38 12.92h-1.2l.7-3.74-1.62 3.74H60.2L60 9.23l-.7 3.7h-1.07l.91-4.86h1.87l.1 3.03 1.32-3.03h1.91l-.96 4.85Zm13.34 0c-.3.1-.6.15-.86.15-.6 0-.96-.3-.96-.86 0-.1 0-.25.05-.35l.05-.4.05-.3.56-3.04h1.16l-.15.91h.6l-.15.96h-.6l-.3 1.67v.15c0 .2.15.3.4.3.15 0 .25 0 .3-.05l-.15.86Zm3.44-3.89c-.1-.05-.1-.05-.16-.05h-.25c-.4 0-.66.15-1.06.66l.1-.6h-.96l-.7 3.93h1.2c.41-2.42.61-2.83 1.17-2.83h.15l.15.05.36-1.16Zm-8.19 1.21c0 .5.3.86.91 1.12.5.2.56.25.56.45 0 .25-.2.35-.71.35-.35 0-.7-.05-1.06-.15l-.15.91h.05l.2.05c.05 0 .2.05.3.05.3 0 .5.05.66.05 1.26 0 1.87-.4 1.87-1.31 0-.56-.25-.86-.86-1.11-.5-.2-.56-.25-.56-.46 0-.2.2-.3.61-.3.25 0 .56 0 .86.05l.15-.9c-.3-.06-.76-.1-1.06-.1-1.31 0-1.77.6-1.77 1.3Zm-5.55.96h-.26c-.65 0-1 .2-1 .61 0 .25.15.4.4.4.45-.05.8-.45.86-1Zm.86 1.72h-1.01l.05-.4c-.3.3-.71.45-1.27.45-.65 0-1.06-.45-1.06-1.06 0-.96.76-1.51 2.07-1.51.15 0 .3 0 .5.05.06-.16.06-.2.06-.26 0-.25-.2-.35-.76-.35-.35 0-.7.05-.96.1l-.15.05-.1.05.15-.9c.6-.16.96-.2 1.41-.2 1.02 0 1.57.4 1.57 1.15 0 .2 0 .36-.1.76l-.25 1.41-.05.26-.05.2v.15l-.05.05Zm3.28-2.42v-.2c0-.3-.2-.51-.56-.51-.4 0-.65.25-.75.7h1.3Zm.6 2.37c-.4.1-.8.15-1.2.15-1.32 0-2.03-.6-2.03-1.77 0-1.36.86-2.37 2.07-2.37.96 0 1.62.56 1.62 1.41 0 .3-.05.56-.15.96h-2.38v.1c0 .46.36.71 1.06.71a4 4 0 0 0 1.27-.25l-.26 1.06Zm11.47-2.22c0-.4-.15-.81-.66-.81-.6 0-.96.7-.96 1.36 0 .56.26.91.71.91.25 0 .81-.35.91-.96v-.5Zm1.26.5c-.2 1.32-1.1 1.92-2.32 1.92-1.36 0-1.87-.8-1.87-1.82 0-1.41.91-2.32 2.32-2.32 1.27 0 1.87.76 1.87 1.77.05.2.05.2 0 .45Zm-66.93-.24v4.15h-1.32V4.82h3.5a3.2 3.2 0 0 1 3 1.86c.16.37.24.78.23 1.18a2.82 2.82 0 0 1-.95 2.18c-.61.58-1.37.87-2.27.87h-2.19Zm0-4.83v3.57h2.22a1.76 1.76 0 0 0 1.31-.53 1.74 1.74 0 0 0 0-2.5 1.73 1.73 0 0 0-1.3-.54h-2.23Zm8.47 1.74c.98 0 1.75.26 2.32.78.56.52.84 1.23.84 2.14v4.32h-1.26v-.98h-.06c-.55.8-1.28 1.2-2.19 1.2-.78 0-1.43-.22-1.95-.68a2.2 2.2 0 0 1-.78-1.72c0-.72.27-1.3.82-1.73a3.52 3.52 0 0 1 2.21-.64c.79 0 1.44.14 1.95.43v-.3a1.49 1.49 0 0 0-.55-1.17c-.35-.31-.8-.48-1.28-.48-.74 0-1.32.31-1.76.93l-1.16-.73a3.25 3.25 0 0 1 2.85-1.37Zm-1.72 5.1a1.04 1.04 0 0 0 .44.85c.3.23.66.35 1.03.34.56 0 1.1-.22 1.5-.61.43-.41.65-.9.65-1.45a2.72 2.72 0 0 0-1.73-.49c-.54 0-.98.13-1.34.4-.37.25-.55.57-.55.95Zm12.16-4.87-4.43 10.1h-1.36l1.64-3.54-2.9-6.56h1.43l2.1 5.03h.03l2.05-5.03h1.44Z"
    />
    <path
      fill="#F5F5F5"
      d="M11.61 10.02c0-.4-.03-.8-.1-1.2H5.92v2.27h3.2a2.71 2.71 0 0 1-1.18 1.78v1.47h1.9a5.73 5.73 0 0 0 1.77-4.32Z"
    />
    <path
      fill="#A9A9A9"
      d="M5.92 15.76a5.7 5.7 0 0 0 3.93-1.42l-1.91-1.47c-.53.36-1.22.57-2.02.57A3.54 3.54 0 0 1 2.6 11H.63v1.51a5.9 5.9 0 0 0 5.3 3.24Z"
    />
    <path fill="#6A6A6A" d="M2.6 11a3.5 3.5 0 0 1 0-2.24V7.24H.63a5.85 5.85 0 0 0 0 5.28l1.97-1.51Z" />
    <path
      fill="#A9A9A9"
      d="M5.92 6.33c.85-.02 1.66.3 2.28.88l1.69-1.68a5.95 5.95 0 0 0-9.25 1.7L2.6 8.77a3.54 3.54 0 0 1 3.32-2.43Zm132.91 4.52c0 5.4-4.4 9.85-9.85 9.85a9.85 9.85 0 1 1 9.85-9.85Z"
    />
    <path
      fill="#6A6A6A"
      d="M125.65 10.9c0-.7-.1-1.41-.2-2.07h-6.06c.05-.35.15-.66.25-1.06h5.4c-.1-.35-.25-.7-.4-1.06h-4.6c.15-.36.36-.66.56-1.06h3.48a6.9 6.9 0 0 0-.75-1.06h-1.92c.3-.36.6-.66 1-1.01A9.58 9.58 0 0 0 115.8 1c-5.36.15-9.8 4.45-9.8 9.85 0 5.4 4.4 9.85 9.85 9.85a9.92 9.92 0 0 0 6.62-2.58c.35-.3.65-.65 1-1.06h-2.01c-.25-.3-.5-.65-.71-1h3.44c.2-.31.4-.66.55-1.07h-4.6c-.15-.3-.3-.65-.4-1.06h5.4c.3-.9.51-1.92.51-3.03Z"
    />
    <path
      fill="#fff"
      d="m119.34 13.38.15-.91c-.05 0-.15.05-.25.05-.36 0-.4-.2-.36-.3l.3-1.82h.56l.15-1.01h-.5l.1-.61h-1.06s-.61 3.43-.61 3.84c0 .6.35.9.86.9.3 0 .55-.1.66-.14Zm.35-1.68c0 1.47 1.01 1.83 1.82 1.83.76 0 1.1-.15 1.1-.15l.21-1.01s-.55.25-1.11.25c-1.16 0-.96-.86-.96-.86h2.12s.15-.66.15-.96c0-.66-.35-1.52-1.51-1.52-1.01-.05-1.82 1.12-1.82 2.43Zm1.82-1.5c.55 0 .45.65.45.7h-1.16c.05-.05.15-.7.7-.7Zm6.62 3.18.2-1.17s-.5.26-.91.26c-.7 0-1.06-.56-1.06-1.22 0-1.26.6-1.92 1.36-1.92.5 0 .96.3.96.3l.15-1.1s-.6-.26-1.21-.26c-1.21 0-2.37 1.06-2.37 3.04 0 1.3.6 2.17 1.86 2.17.46.05 1.02-.1 1.02-.1Zm-14.5-4.15c-.7 0-1.27.2-1.27.2l-.15.91s.46-.2 1.17-.2c.35 0 .65.05.65.36 0 .2-.05.25-.05.25h-.45c-.91 0-1.87.35-1.87 1.56 0 .96.6 1.17 1 1.17.72 0 1.07-.46 1.12-.46l-.05.4h.86l.4-2.87c0-1.27-1-1.32-1.36-1.32Zm.2 2.33c0 .15-.1 1-.7 1-.31 0-.41-.25-.41-.4 0-.25.15-.6.96-.6h.15Zm2.17 1.92c.26 0 1.57.05 1.57-1.37 0-1.31-1.26-1.06-1.26-1.56 0-.26.2-.36.55-.36.15 0 .7.05.7.05l.16-.96s-.35-.1-1.01-.1c-.76 0-1.57.3-1.57 1.37 0 1.21 1.32 1.1 1.32 1.56 0 .3-.36.36-.6.36-.46 0-.97-.15-.97-.15l-.15.96c.1.1.4.2 1.26.2Zm20.81-5.05-.2 1.41s-.4-.5-1-.5c-.97 0-1.78 1.16-1.78 2.52 0 .86.4 1.72 1.32 1.72.6 0 1-.4 1-.4l-.04.35h1.06l.76-5-1.12-.1Zm-.5 2.72c0 .56-.25 1.32-.86 1.32-.35 0-.55-.3-.55-.86 0-.86.35-1.37.85-1.37.36.05.56.3.56.91Zm-28.39 2.28.6-3.74.1 3.74h.71l1.37-3.74-.56 3.74h1.11l.86-5h-1.71l-1.07 3.08-.05-3.08h-1.51l-.86 5h1.01Z"
    />
    <path
      fill="#fff"
      d="M124.08 13.43c.3-1.72.36-3.14 1.11-2.88.1-.66.26-.96.36-1.22h-.2c-.46 0-.86.61-.86.61l.1-.55h-1.01l-.66 4.04h1.16Zm6.47-4.2c-.7 0-1.27.2-1.27.2l-.15.91s.46-.2 1.17-.2c.35 0 .65.05.65.36 0 .2-.05.25-.05.25h-.45c-.91 0-1.87.35-1.87 1.56 0 .96.6 1.17 1 1.17.72 0 1.07-.46 1.12-.46l-.05.4h.96l.4-2.87c0-1.27-1.1-1.32-1.46-1.32Zm.25 2.33c0 .15-.1 1-.7 1-.31 0-.41-.25-.41-.4 0-.25.15-.6.96-.6h.15Zm2.02 1.87c.3-1.72.36-3.14 1.11-2.88.1-.66.26-.96.36-1.22h-.2c-.46 0-.86.61-.86.61l.1-.55h-1.01l-.66 4.04h1.16Z"
    />
    <path
      fill="url(#a)"
      d="M278.25 7h-5.2c.3 1.72 1.96 3.33 3.78 3.33h4.15c.05-.15.05-.4.05-.55A2.8 2.8 0 0 0 278.25 7Z"
    />
    <path
      fill="#fff"
      d="M273.5 10.64v4.19h2.52v-2.22h2.23c1.2 0 2.27-.86 2.62-1.97h-7.37ZM264.6 7v7.78h2.23s.56 0 .86-.56a857.9 857.9 0 0 0 1.97-3.89h.3v4.45h2.53V7h-2.23s-.55.05-.85.56c-1.27 2.57-1.97 3.89-1.97 3.89h-.3V7h-2.53ZM254 14.83V7.05h2.53s.7 0 1.1 1.11a72.47 72.47 0 0 1 1.12 3.34s.2-.71 1.11-3.34c.4-1.1 1.11-1.1 1.11-1.1h2.53v7.77h-2.53v-4.2h-.3l-1.42 4.2h-1.1l-1.42-4.2h-.3v4.2H254Z"
    />
    <path
      fill="#A9A9A9"
      d="M172.85 10.1c-.1.75-.7.75-1.26.75h-.3l.25-1.47c0-.1.1-.15.2-.15h.15c.4 0 .76 0 .96.2v.66Zm-.25-2.03h-2.17c-.16 0-.26.1-.3.25l-.87 5.56c0 .1.05.2.2.2h1.02c.15 0 .25-.1.3-.25l.25-1.52c0-.15.15-.25.3-.25h.71c1.42 0 2.22-.7 2.48-2.07.1-.6 0-1.06-.26-1.41-.4-.3-.95-.5-1.66-.5Zm5 4.04c-.1.6-.56 1.01-1.16 1.01-.3 0-.56-.1-.71-.3a.88.88 0 0 1-.15-.7c.1-.61.55-1.02 1.16-1.02.3 0 .55.1.7.3.1.16.2.4.16.71Zm1.4-2.01h-1c-.1 0-.16.05-.2.15l-.06.3-.05-.1c-.2-.3-.7-.45-1.21-.45-1.17 0-2.12.86-2.33 2.07-.1.6.05 1.16.4 1.57.31.35.76.5 1.32.5.91 0 1.41-.6 1.41-.6l-.04.3c0 .1.04.2.2.2h.9c.16 0 .26-.1.3-.25l.56-3.54c0-.05-.05-.15-.2-.15Zm5.52 0h-1.06c-.1 0-.2.04-.25.14l-1.42 2.12-.6-2.02c-.06-.15-.16-.2-.3-.2h-1.02c-.1 0-.2.1-.15.25l1.16 3.34-1.06 1.51c-.1.1 0 .3.15.3h1.06c.1 0 .2-.04.26-.14l3.43-5c.05-.16-.05-.3-.2-.3Z"
    />
    <path
      fill="#F1F1F1"
      d="M188.21 10.1c-.1.75-.7.75-1.26.75h-.3l.25-1.47c0-.1.1-.15.2-.15h.15c.4 0 .76 0 .96.2.05.2.05.4 0 .66Zm-.25-2.03h-2.18c-.15 0-.25.1-.3.25l-.86 5.56c0 .1.05.2.2.2h1.12c.1 0 .2-.05.2-.2l.25-1.57c0-.15.15-.25.3-.25h.71c1.42 0 2.22-.7 2.48-2.07.1-.6 0-1.06-.26-1.41-.35-.3-.9-.5-1.66-.5Zm5.04 4.04c-.1.6-.55 1.01-1.16 1.01-.3 0-.55-.1-.7-.3-.15-.2-.2-.46-.15-.7.1-.61.55-1.02 1.16-1.02.3 0 .55.1.7.3.1.16.2.4.16.71Zm1.42-2.02h-1c-.11 0-.16.05-.21.15l-.05.3-.05-.1c-.2-.3-.7-.45-1.22-.45-1.16 0-2.12.86-2.32 2.07-.1.6.05 1.16.4 1.57.3.35.76.5 1.32.5.9 0 1.41-.6 1.41-.6l-.05.3c0 .1.05.2.2.2h.91c.16 0 .26-.1.3-.25l.56-3.54c0-.05-.1-.15-.2-.15Zm1.21-1.87-.9 5.66c0 .1.05.2.2.2h.9c.16 0 .26-.1.3-.25l.87-5.56c0-.1-.05-.2-.2-.2h-1.02c-.04 0-.1.1-.15.15Z"
    />
    <path
      fill="#263577"
      d="m160.27 15.14.15-1.06h-2.12l1.21-7.73s0-.05.06-.05h3.03c.96 0 1.66.2 2.02.6.15.21.25.41.3.62.05.25.05.5 0 .85v.2l.15.1c.15.06.25.16.36.26.15.15.25.35.25.6.05.26.05.56-.05.92-.1.4-.2.7-.36 1a3.5 3.5 0 0 1-.55.66c-.2.15-.5.25-.76.36-.3.05-.6.1-.96.1h-.25c-.15 0-.3.05-.46.15-.1.1-.2.25-.25.4v.1l-.3 1.87v.1h-1.47v-.05Z"
    />
    <path
      fill="#F1F1F1"
      d="M165.28 8.37c0 .05 0 .1-.06.16-.4 2.02-1.71 2.67-3.43 2.67h-.86c-.2 0-.4.15-.4.36l-.46 2.83-.1.8c0 .15.1.26.2.26h1.57c.2 0 .35-.16.35-.3v-.1l.3-1.83v-.1c.06-.2.2-.3.36-.3h.25c1.52 0 2.68-.6 2.98-2.37.15-.76.05-1.37-.3-1.77-.1-.1-.25-.2-.4-.3Z"
    />
    <path
      fill="#fff"
      d="M164.87 8.22c-.05 0-.1-.05-.2-.05-.05 0-.15-.05-.2-.05-.25-.05-.5-.05-.76-.05h-2.32c-.05 0-.1 0-.15.05-.1.05-.2.15-.2.25l-.51 3.14v.1c.05-.2.2-.36.4-.36h.86c1.72 0 3.03-.7 3.44-2.67 0-.05 0-.1.05-.16l-.3-.15c-.06-.05-.1-.05-.1-.05Z"
    />
    <path
      fill="#A9A9A9"
      d="M161.03 8.37c0-.1.1-.2.2-.25.05 0 .1-.05.15-.05h2.33a3.58 3.58 0 0 1 .96.1c.05 0 .1.05.2.05a4277.58 4277.58 0 0 0 .4.2c.1-.75 0-1.26-.4-1.71-.46-.5-1.26-.71-2.27-.71h-2.98c-.2 0-.4.15-.4.35L158 14.13c0 .15.1.3.25.3h1.82l.46-2.92.5-3.14Z"
    />
    <path
      fill="#F1F1F1"
      d="M316.37 13.39c.35.15.5.65.5.9.05.41-.05.61-.2.61-.15 0-.36-.15-.56-.5-.2-.36-.3-.71-.2-.91.15-.1.3-.15.45-.1Zm-2.07 1.56c.2 0 .45.1.7.3.4.36.56.76.36 1.07-.1.15-.36.25-.56.25-.25 0-.5-.1-.66-.25-.4-.36-.5-.86-.25-1.17.05-.1.2-.2.4-.2Z"
    />
    <path
      fill="#F1F1F1"
      d="M309.5 18.94a9.47 9.47 0 1 1 0-18.94 9.49 9.49 0 0 1 8.18 14.35c-.05.05-.1.05-.1-.05a4.46 4.46 0 0 0-3.79-4c-.2-.05-.2-.15.05-.15a8.77 8.77 0 0 1 2.02.05c.05-.25.05-.5.05-.7a6.3 6.3 0 0 0-6.26-6.27 6.3 6.3 0 0 0-6.27 6.27 6.3 6.3 0 0 0 6.27 6.26h.3c-.1-.56-.15-1.11-.1-1.72 0-.4.1-.45.25-.15a6.55 6.55 0 0 0 4.55 3.39c1.97.45 3.94.96 6.11 3.63.2.26-.1.5-.3.3-2.17-1.91-4.14-2.57-5.96-2.57-2.28.05-3.64.3-5 .3Zm-74.2-9.55c-.1-.6-.66-1.01-1.42-1.01h-.7c-.46-.05-.56.1-.56.45v5.26c0 .9-.91 1.87-1.97 2.07-3.34.76-6.67 1.46-10 2.22-.36.1-.76.1-1.16.1-.16 0-.4-.1-.46-.25-.05-.1.1-.3.2-.4.15-.1.36-.2.56-.3l1.87-.61c2.47-.81 4.95-1.62 7.42-2.48 1.11-.35 1.72-1.11 1.72-2.07.05-3.03 0-6.11 0-9.14 0-.5-.25-.91-.8-1.11-.66-.26-1.27-.05-1.83.2l-10.55 5c-1.01.5-1.62 1.21-1.62 2.22v8.64c0 .15 0 .3.05.4.35.96 1.26 1.57 2.48 1.57h14.8a2 2 0 0 0 1.41-.46c.5-.4.5-.95.5-1.46V9.79c.1-.05.1-.25.06-.4Zm-10.3-.9c.24-.67.8-1.07 1.6-1.17.56-.05 1.02.25 1.12.76.1.75-.8 1.66-1.77 1.66-.76 0-1.21-.55-.96-1.26Z"
    />
    <defs>
      <linearGradient id="a" x1={273.04} x2={281.01} y1={8.69} y2={8.69} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4E4E4" />
        <stop offset={1} stopColor="#929292" />
      </linearGradient>
    </defs>
  </svg>
);

export default App;
