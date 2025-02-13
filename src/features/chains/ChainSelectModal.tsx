import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { ChainSearchMenu, ChainSearchMenuProps, Modal } from '@hyperlane-xyz/widgets';
import { useMemo } from 'react';
import { RIVALZ_LOGO } from '../../consts/app';
import { useStore } from '../store';

export function ChainSelectListModal({
  isOpen,
  close,
  onSelect,
  customListItemField,
  showChainDetails,
}: {
  isOpen: boolean;
  close: () => void;
  onSelect: (chain: ChainName) => void;
  customListItemField?: ChainSearchMenuProps['customListItemField'];
  showChainDetails?: ChainSearchMenuProps['showChainDetails'];
}) {
  const { chainMetadata, chainMetadataOverrides, setChainMetadataOverrides } = useStore((s) => ({
    chainMetadata: s.chainMetadata,
    chainMetadataOverrides: s.chainMetadataOverrides,
    setChainMetadataOverrides: s.setChainMetadataOverrides,
  }));

  const onSelectChain = (chain: ChainMetadata) => {
    onSelect(chain.name);
    close();
  };

  const chainMetadataModified = useMemo(() => {
    return {
      ...chainMetadata,
      rivalz: {
        ...chainMetadata.rivalz,
        logoURI: RIVALZ_LOGO,
      },
    };
  }, [chainMetadata]);

  return (
    <Modal isOpen={isOpen} close={close} panelClassname="p-4 sm:p-5 max-w-lg min-h-[40vh]">
      <ChainSearchMenu
        chainMetadata={chainMetadataModified}
        onClickChain={onSelectChain}
        overrideChainMetadata={chainMetadataOverrides}
        onChangeOverrideMetadata={setChainMetadataOverrides}
        customListItemField={customListItemField}
        defaultSortField="custom"
        showChainDetails={showChainDetails}
      />
    </Modal>
  );
}
