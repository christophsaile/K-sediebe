// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IIngredientFields {
	/** title */
	title: string;
}

export interface IIngredient extends Entry<IIngredientFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'ingredient';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export interface IRecipeFields {
	/** Title */
	title: string;

	/** Slug */
	slug: string;

	/** Duration */
	duration: 'Gering' | 'Hoch';

	/** Vegetarian */
	vegetarian: boolean;

	/** Category */
	category: 'Reis' | 'Nudeln' | 'Kartoffeln' | 'Sonstiges';

	/** Ingredients */
	ingredients: Record<string, any>;

	/** Description */
	description?: Document | undefined;

	/** Image */
	image?: Asset | undefined;
}

export interface IRecipe extends Entry<IRecipeFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'recipe';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}

export type CONTENT_TYPE = 'ingredient' | 'recipe';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
