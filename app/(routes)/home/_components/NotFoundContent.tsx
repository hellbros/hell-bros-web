'use client'
import Image from "next/image";
import Button from "@/app/_components/Button";
import { theme } from "@/app/_styles/theme";
import HellBrosIso from "@/public/assets/brand/hellbros_iso_02.svg"
import { useDictionary, useLocale } from "@/app/_i18n/LocaleProvider";
import { localePath } from "@/app/_i18n/locales";
import { NotFoundPage, Text } from "../styles";

const NotFoundContent = () => {
  const t = useDictionary();
  const home = localePath(useLocale());

  return (
    <NotFoundPage>
      <Image src={HellBrosIso} alt="Hell Bros" priority />
      <h1>404</h1>
      <Text as="p" $styles="heroTagline">{t.notFound.message}</Text>
      <Button as="a" href={home} $variant="solid" color={theme.colors.primary}>
        {t.notFound.back}
      </Button>
    </NotFoundPage>
  );
};

export default NotFoundContent;
