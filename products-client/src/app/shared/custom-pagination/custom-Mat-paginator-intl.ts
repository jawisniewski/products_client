import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  constructor(private translate: TranslateService) {
    super();
    this.translate.onLangChange.subscribe(() => {
      this.getAndInitTranslations();
    });
    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
    this.translate
      .get([
        'PAGINATOR.ITEMS_PER_PAGE',
        'PAGINATOR.NEXT_PAGE',
        'PAGINATOR.PREVIOUS_PAGE',
      ])
      .subscribe((translations) => {
        this.itemsPerPageLabel = translations['PAGINATOR.ITEMS_PER_PAGE'];
        this.nextPageLabel = translations['PAGINATOR.NEXT_PAGE'];
        this.previousPageLabel = translations['PAGINATOR.PREVIOUS_PAGE'];
        this.changes.next();
      });
  }

  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return this.translate.instant('PAGINATOR.RANGE_LABEL', {
        startIndex: 0,
        endIndex: 0,
        length,
      });
    }
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min((page + 1) * pageSize, length);
    return this.translate.instant('PAGINATOR.RANGE_LABEL', {
      startIndex,
      endIndex,
      length,
    });
  };
}
