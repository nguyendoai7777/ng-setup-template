/** Loại JSON-LD */
import { Prettify } from '@typings';
import { EJsonLDType, EOGType } from './seo.const';

export type JsonLdType = keyof typeof EJsonLDType;
type JDProduct = Prettify<{ type: 'Product' } & ProductProps>;
type JDArticle = Prettify<{ type: 'Article' } & ArticleProps>;
type JDOrganization = Prettify<{ type: 'Organization' } & OrganizationProps>;
export type JsonLdData = JDProduct | JDArticle | JDOrganization;

export type OGType = keyof typeof EOGType;

/** ------------------- INTERFACES ------------------- */

/**
 * Product schema (JSON-LD) theo schema.org
 */
export interface ProductProps {
  /** Tên sản phẩm, bắt buộc */
  name: string;

  /** Mô tả sản phẩm, bắt buộc */
  description: string;

  /** URL hình ảnh sản phẩm, có thể là array nếu nhiều hình */
  image: string;

  /**
   * SKU (Stock Keeping Unit) - mã định danh sản phẩm.
   * Không bắt buộc nhưng Google khuyến nghị nếu bạn có.
   */
  sku?: string;

  /**
   * Thương hiệu sản phẩm.
   * Có thể là tên thương hiệu hoặc object Organization theo schema.org.
   */
  brand?: string;

  /**
   * Thông tin giá bán.
   * Để hiển thị rich snippet về giá trên Google.
   */
  offers?: {
    /** Giá sản phẩm */
    price: string;

    /** Đơn vị tiền tệ, ví dụ "USD", "VND" */
    priceCurrency: string;

    /**
     * Tình trạng tồn kho, ví dụ:
     * "https://schema.org/InStock"
     * "https://schema.org/OutOfStock"
     * "https://schema.org/PreOrder"
     */
    availability?: string;

    /** URL trang sản phẩm hoặc nơi mua */
    url?: string;
  };
}

/**
 * Article schema (JSON-LD) cho bài viết, tin tức, blog
 */
export interface ArticleProps {
  /** Tiêu đề bài viết, bắt buộc */
  headline: string;

  /** Mô tả ngắn gọn về bài viết */
  description?: string;

  /** Hình ảnh đại diện cho bài viết */
  image?: string;

  /** Tên tác giả hoặc URL tác giả */
  author?: string;

  /** Ngày xuất bản, định dạng ISO 8601 */
  datePublished?: string;

  /** Ngày chỉnh sửa, nếu có, định dạng ISO 8601 */
  dateModified?: string;
}

/**
 * Organization schema (JSON-LD) cho doanh nghiệp, công ty, tổ chức
 */
export interface OrganizationProps {
  /** Tên tổ chức, bắt buộc */
  name: string;

  /** URL chính thức của tổ chức */
  url?: string;

  /** Logo công ty (URL) */
  logo?: string;

  /**
   * Thông tin liên hệ
   * telephone: số điện thoại liên hệ
   * contactType: kiểu liên hệ (ví dụ: customer service)
   */
  contactPoint?: {
    telephone: string;
    contactType: string;
  };

  /**
   * Các liên kết mạng xã hội, ví dụ:
   * ["https://www.facebook.com/yourpage", "https://twitter.com/yourhandle"]
   */
  sameAs?: string[];
}
