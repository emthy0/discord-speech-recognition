import { VoiceConnection } from "discord.js";
import VoiceMessage from "./bot/voiceMessage";

/**
 * Emitted when bot joins a voice channel
 * <hr>
 *
 * Example usage:
 * ```javascript
 * client.on('voiceJoin', (connection) => {
 *   connection.play('audio.mp3');
 * });
 * ```
 * @asMemberOf DiscordSR
 * @event
 */
export declare function voiceJoin(connection: VoiceConnection): void;

/**
 * Emitted when someone ends talking in channel
 * @asMemberOf DiscordSR
 * @param voiceMessage
 * @event
 */
export declare function speech(voiceMessage: VoiceMessage): void;

/**
 * Emitted when error occurs during processing audio stream. Usually when someone tries to talk using web version of discord. See https://github.com/discordjs/opus/issues/49
 * @asMemberOf DiscordSR
 * @param error
 * @event
 */
export declare function audioStreamError(error: Error): void;
