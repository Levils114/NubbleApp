import {MetaDataPage} from 'src/@types/Pages';

import {MetadataPageApi} from '..';

export function metadataDto(metadataPageApi: MetadataPageApi): MetaDataPage {
  return {
    total: metadataPageApi.total,
    perPage: metadataPageApi.per_page,
    currentPage: metadataPageApi.current_page,
    lastPage: metadataPageApi.last_page,
    firstPage: metadataPageApi.first_page,
    hasNextPage: !!metadataPageApi.next_page_url,
    hasPreviousPage: !!metadataPageApi.previous_page_url,
  };
}
