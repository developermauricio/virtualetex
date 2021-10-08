/* global pwsL10n */

/**
 * Password field.
 *
 * @since 1.6.7
 */

'use strict';

window.WPFormsPasswordField = window.WPFormsPasswordField || ( function( document, window, $ ) {

	var app = {

		/**
		 * Toggle the hide message depending on if user hiding a from.
		 *
		 * @since 1.6.7
		 *
		 * @param {string} value   Password value.
		 * @param {object} element Password field.
		 *
		 * @returns {number} Strength result.
		 */
		passwordStrength: function( value, element ) {

			var $strengthResult = $( element ).parent().find( '.wpforms-pass-strength-result' );

			if ( ! $strengthResult.length ) {
				$strengthResult = $( '<div class="wpforms-pass-strength-result"></div>' );

				$strengthResult.css( 'max-width', $( element ).css( 'max-width' ) );

				if ( ! $( element ).parent().find( '#' + $( element ).attr( 'id' ) + '-error' ).length ) {
					$( '<label id="' + $( element ).attr( 'id' ) + '-error" class="wpforms-error" for="' + $( element ).attr( 'id' ) + '"></label>' ).insertAfter( $( element ) );
				}
			}

			$strengthResult.removeClass( 'short bad good strong empty' );

			if ( ! value || value.trim() === '' ) {
				$strengthResult.addClass( 'empty' ).html( '&nbsp;' );
				$strengthResult.remove();
				return 0;
			}

			var strength = wp.passwordStrength.meter( value, wp.passwordStrength.userInputDisallowedList(), value );

			$strengthResult = app.updateStrengthResultEl( $strengthResult, strength );

			$strengthResult.insertAfter( $( element ) );

			return strength;
		},

		/**
		 * Update strength result element to show current result strength.
		 *
		 * @since 1.6.7
		 *
		 * @param {jQuery} $strengthResult Strength result element.
		 * @param {number} strength Strength result number.
		 *
		 * @returns {jQuery} Modified strength result element.
		 */
		updateStrengthResultEl: function( $strengthResult, strength ) {

			switch ( strength ) {
				case -1:
					$strengthResult.addClass( 'bad' ).html( pwsL10n.unknown );
					break;
				case 2:
					$strengthResult.addClass( 'bad' ).html( pwsL10n.bad );
					break;
				case 3:
					$strengthResult.addClass( 'good' ).html( pwsL10n.good );
					break;
				case 4:
					$strengthResult.addClass( 'strong' ).html( pwsL10n.strong );
					break;
				default:
					$strengthResult.addClass( 'short' ).html( pwsL10n.short );
			}

			return $strengthResult;
		},
	};

	// Provide access to public functions/properties.
	return app;

}( document, window, jQuery ) );
