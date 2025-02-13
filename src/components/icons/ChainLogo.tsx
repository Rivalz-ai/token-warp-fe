import { ChainLogo as ChainLogoInner } from '@hyperlane-xyz/widgets';
import Image from 'next/image';
import { useMemo } from 'react';
import { RIVALZ_CHAIN, RIVALZ_LOGO } from '../../consts/app';
import { useChainMetadata } from '../../features/chains/hooks';
import { useStore } from '../../features/store';

export function ChainLogo({
  chainName,
  background,
  size,
}: {
  chainName?: string;
  background?: boolean;
  size?: number;
}) {
  const registry = useStore((s) => s.registry);
  const chainMetadata = useChainMetadata(chainName);
  const { name, Icon } = useMemo(() => {
    const name = chainMetadata?.name || '';
    const logoUri = chainMetadata?.logoURI;
    const Icon = logoUri
      ? (props: { width: number; height: number; title?: string }) => (
          <Image src={chainName === RIVALZ_CHAIN ? RIVALZ_LOGO : logoUri} alt="" {...props} />
        )
      : undefined;
    return {
      name,
      Icon,
    };
  }, [chainMetadata]);

  return (
    <ChainLogoInner
      chainName={name}
      registry={registry}
      size={size}
      background={background}
      Icon={Icon}
    />
  );
}
