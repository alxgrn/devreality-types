// Пользовательский аккаунт
export type TUser = {
    id: number;
    email: string;
    password: string | null;
    is_root: boolean;
    is_editor: boolean;
    is_author: boolean;
    created_date: string;
    restore_code: string;
};
// Пользовательская сессия
export type TSession = {
    token: string;
    user: TUser;
    //profile: TProfile;
};
// Изображение
export type TImage = {
    id: number;
    url: string;
    prefix: string;
    uploaded: string;
    filename: string;
};
// Статья
export type TArticle = {
    id: number;
    slug: string;
    title: string;
    short: string | null;
    content: string;
    status: number;
    seo_title: string | null;
    seo_descr: string | null;
    system_tags: number[] | null;
    created_date: string;
    updated_date: string;
    published_date: string | null;
};
// Статья в ответе на запрос отдельной статьи
export type TArticleResponse = TArticle & {
    cover: string;
    section_slug: string | null;
};
// Статья в ответе на запрос списка статей
export type TArticleItemResponse = {
    id: number;
    slug: string;
    title: string;
    status: number;
    updated_date: string;
    published_date: string | null;
    wide_cover: string;
    vert_cover: string | null;
    section_slug: string | null;
};
// Изображения для превью статей
export type TPreviewArticleImage = {
    Id: number;
    ImageId: number | null; // => TImage.Id
    CDNUrl: string;
    ArticleId: number; // => TArticleId
};
// Вид привязки изображений к различным объектам
export const enum EArticleImageRelationType {
	None = 0,
	ArticleContent = 1,
	ArticlePreview = 2,
	ArticlePreviewForHorizontalCard = 3,
	ArticleSlider = 4,
	ArticleConferenceSlider = 5,
	Advert = 6,
	AdvertMobile = 7,
}
// Привязка изображений к различным объектам
export type TImagesRelation = {
    id: number;
    image_id: number;
    relation_type: number;
    advert_id: number | null;
    article_id: number | null;
    article_image_relation_type: EArticleImageRelationType | null;
};
// Раздел
export type TSection = {
    id: number;
    slug: string;
    title: string;
    weight: number;
    status: number; // 0|1 - опубликовано или нет
    published_date: string | null;
    type: number;
};
