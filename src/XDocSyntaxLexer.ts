// Generated from XDocSyntaxLexer.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class XDocSyntaxLexer extends Lexer {
	public static readonly NumberLiteral=1;
	public static readonly IntegerLiteral=2;
	public static readonly FloatingPointLiteral=3;
	public static readonly BooleanLiteral=4;
	public static readonly CharacterLiteral=5;
	public static readonly StringLiteral=6;
	public static readonly NullLiteral=7;
	public static readonly ID=8;
	public static readonly NEWLINE=9;
	public static readonly SPACE=10;
	public static readonly TEXT_CONTENT=11;
	public static readonly AT=12;
	public static readonly PLUS=13;
	public static readonly MINUS=14;
	public static readonly STAR=15;
	public static readonly FORWARD_SLASH=16;
	public static readonly COLON=17;
	public static readonly PERIOD=18;
	public static readonly COMMA=19;
	public static readonly EQUAL=20;
	public static readonly QUESTION=21;
	public static readonly AMP=22;
	public static readonly PIPE=23;
	public static readonly ARROW=24;
	public static readonly EXCLAMATION=25;
	public static readonly INLINE_TAG_START=26;
	public static readonly BRACE_OPEN=27;
	public static readonly BRACE_CLOSE=28;
	public static readonly PAREN_OPEN=29;
	public static readonly PAREN_CLOSE=30;
	public static readonly BRACKET_OPEN=31;
	public static readonly BRACKET_CLOSE=32;
	public static readonly LESSTHAN=33;
	public static readonly GREATERTHAN=34;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"NumberLiteral", "IntegerLiteral", "DecimalIntegerLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "BinaryIntegerLiteral", "IntegerTypeSuffix", "DecimalNumeral", 
		"Digits", "Digit", "NonZeroDigit", "DigitsAndUnderscores", "DigitOrUnderscore", 
		"Underscores", "HexNumeral", "HexDigits", "HexDigit", "HexDigitsAndUnderscores", 
		"HexDigitOrUnderscore", "OctalNumeral", "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
		"OctalDigitOrUnderscore", "BinaryNumeral", "BinaryDigits", "BinaryDigit", 
		"BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore", "FloatingPointLiteral", 
		"DecimalFloatingPointLiteral", "ExponentPart", "ExponentIndicator", "SignedInteger", 
		"Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", "HexSignificand", 
		"BinaryExponent", "BinaryExponentIndicator", "BooleanLiteral", "CharacterLiteral", 
		"SingleCharacter", "StringLiteral", "StringCharacters", "StringCharacter", 
		"EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape", "NullLiteral", 
		"ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", 
		"FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", 
		"PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", 
		"PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", 
		"GREATERTHAN", "LETTER", "DIGIT"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", 
		"'*'", "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, 
		"'!'", "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "NumberLiteral", "IntegerLiteral", "FloatingPointLiteral", 
		"BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral", 
		"ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", 
		"FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", 
		"PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", 
		"PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", 
		"GREATERTHAN"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XDocSyntaxLexer._LITERAL_NAMES, XDocSyntaxLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return XDocSyntaxLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XDocSyntaxLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "XDocSyntaxLexer.g4"; }

	@Override
	public get ruleNames(): string[] { return XDocSyntaxLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return XDocSyntaxLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return XDocSyntaxLexer.modeNames; }

	@Override
	action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 51:
			this.ID_action(_localctx, actionIndex);
			break;
		}
	}
	private ID_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:

			    if(this.text == "true" || this.text == "false") this.type = XDocSyntaxLexer.BooleanLiteral;
			    if (this.text == "null" || this.text == "undefined") this.type = XDocSyntaxLexer.NullLiteral;

			  
			break;
		}
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02$\u0225\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t"+
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04"+
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x05\x02\xA6\n\x02\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x05\x03\xAC\n\x03\x03\x04\x03\x04\x05\x04\xB0\n\x04\x03"+
		"\x05\x03\x05\x05\x05\xB4\n\x05\x03\x06\x03\x06\x05\x06\xB8\n\x06\x03\x07"+
		"\x03\x07\x05\x07\xBC\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xC3\n\t"+
		"\x03\t\x03\t\x03\t\x05\t\xC8\n\t\x05\t\xCA\n\t\x03\n\x03\n\x05\n\xCE\n"+
		"\n\x03\n\x05\n\xD1\n\n\x03\v\x03\v\x05\v\xD5\n\v\x03\f\x03\f\x03\r\x06"+
		"\r\xDA\n\r\r\r\x0E\r\xDB\x03\x0E\x03\x0E\x05\x0E\xE0\n\x0E\x03\x0F\x06"+
		"\x0F\xE3\n\x0F\r\x0F\x0E\x0F\xE4\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11"+
		"\x03\x11\x05\x11\xED\n\x11\x03\x11\x05\x11\xF0\n\x11\x03\x12\x03\x12\x03"+
		"\x13\x06\x13\xF5\n\x13\r\x13\x0E\x13\xF6\x03\x14\x03\x14\x05\x14\xFB\n"+
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0103\n\x16"+
		"\x03\x16\x05\x16\u0106\n\x16\x03\x17\x03\x17\x03\x18\x06\x18\u010B\n\x18"+
		"\r\x18\x0E\x18\u010C\x03\x19\x03\x19\x05\x19\u0111\n\x19\x03\x1A\x03\x1A"+
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0119\n\x1B\x03\x1B\x05\x1B\u011C"+
		"\n\x1B\x03\x1C\x03\x1C\x03\x1D\x06\x1D\u0121\n\x1D\r\x1D\x0E\x1D\u0122"+
		"\x03\x1E\x03\x1E\x05\x1E\u0127\n\x1E\x03\x1F\x03\x1F\x05\x1F\u012B\n\x1F"+
		"\x03 \x03 \x03 \x05 \u0130\n \x03 \x05 \u0133\n \x03 \x05 \u0136\n \x03"+
		" \x03 \x03 \x05 \u013B\n \x03 \x05 \u013E\n \x03 \x03 \x03 \x05 \u0143"+
		"\n \x03 \x03 \x03 \x05 \u0148\n \x03!\x03!\x03!\x03\"\x03\"\x03#\x05#"+
		"\u0150\n#\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x05&\u015B\n&\x03"+
		"\'\x03\'\x05\'\u015F\n\'\x03\'\x03\'\x03\'\x05\'\u0164\n\'\x03\'\x03\'"+
		"\x05\'\u0168\n\'\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03"+
		"*\x03*\x03*\x03*\x05*\u0178\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x05+\u0182\n+\x03,\x03,\x03-\x03-\x05-\u0188\n-\x03-\x03-\x03-\x05-"+
		"\u018D\n-\x03-\x05-\u0190\n-\x03.\x06.\u0193\n.\r.\x0E.\u0194\x03/\x03"+
		"/\x05/\u0199\n/\x030\x030\x030\x030\x050\u019F\n0\x031\x031\x031\x031"+
		"\x031\x031\x031\x031\x031\x031\x031\x051\u01AC\n1\x032\x032\x033\x033"+
		"\x063\u01B2\n3\r3\x0E3\u01B3\x033\x033\x033\x033\x033\x034\x034\x034\x03"+
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u01C8\n4\x035\x03"+
		"5\x035\x035\x075\u01CE\n5\f5\x0E5\u01D1\v5\x036\x036\x056\u01D5\n6\x03"+
		"6\x036\x036\x036\x056\u01DB\n6\x036\x036\x056\u01DF\n6\x056\u01E1\n6\x03"+
		"7\x067\u01E4\n7\r7\x0E7\u01E5\x038\x068\u01E9\n8\r8\x0E8\u01EA\x039\x03"+
		"9\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03"+
		"@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x05E\u020B\nE\x03F\x03F\x03G\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03"+
		"J\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03"+
		"Q\x02\x02\x02R\x03\x02\x03\x05\x02\x04\x07\x02\x02\t\x02\x02\v\x02\x02"+
		"\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\x02"+
		"\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02"+
		"\x02\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02\x025"+
		"\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x05?\x02\x02A\x02\x02C\x02\x02"+
		"E\x02\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02O\x02\x02Q\x02\x02S\x02\x06"+
		"U\x02\x07W\x02\x02Y\x02\b[\x02\x02]\x02\x02_\x02\x02a\x02\x02c\x02\x02"+
		"e\x02\x02g\x02\ti\x02\nk\x02\vm\x02\fo\x02\rq\x02\x0Es\x02\x0Fu\x02\x10"+
		"w\x02\x11y\x02\x12{\x02\x13}\x02\x14\x7F\x02\x15\x81\x02\x16\x83\x02\x17"+
		"\x85\x02\x18\x87\x02\x19\x89\x02\x1A\x8B\x02\x1B\x8D\x02\x1C\x8F\x02\x1D"+
		"\x91\x02\x1E\x93\x02\x1F\x95\x02 \x97\x02!\x99\x02\"\x9B\x02#\x9D\x02"+
		"$\x9F\x02\x02\xA1\x02\x02\x03\x02\x16\x04\x02NNnn\x03\x023;\x04\x02ZZ"+
		"zz\x05\x022;CHch\x04\x02QQqq\x03\x0229\x04\x02DDdd\x03\x0223\x04\x02G"+
		"Ggg\x04\x02--//\x06\x02FFHHffhh\x04\x02RRrr\x06\x02\f\f\x0F\x0F))^^\x06"+
		"\x02\f\f\x0F\x0F$$^^\n\x02$$))^^ddhhppttvv\x03\x0225\x04\x02\v\v\"\"\n"+
		"\x02\v\f\x0F\x0F\"$(<>B]]__}\x7F\x04\x02C\\c|\x03\x022;\u0239\x02\x03"+
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02S\x03"+
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02g\x03\x02\x02"+
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02"+
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02"+
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02"+
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02"+
		"\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02"+
		"\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02"+
		"\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02"+
		"\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02"+
		"\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x03\xA5\x03\x02\x02\x02"+
		"\x05\xAB\x03\x02\x02\x02\x07\xAD\x03\x02\x02\x02\t\xB1\x03\x02\x02\x02"+
		"\v\xB5\x03\x02\x02\x02\r\xB9\x03\x02\x02\x02\x0F\xBD\x03\x02\x02\x02\x11"+
		"\xC9\x03\x02\x02\x02\x13\xCB\x03\x02\x02\x02\x15\xD4\x03\x02\x02\x02\x17"+
		"\xD6\x03\x02\x02\x02\x19\xD9\x03\x02\x02\x02\x1B\xDF\x03\x02\x02\x02\x1D"+
		"\xE2\x03\x02\x02\x02\x1F\xE6\x03\x02\x02\x02!\xEA\x03\x02\x02\x02#\xF1"+
		"\x03\x02\x02\x02%\xF4\x03\x02\x02\x02\'\xFA\x03\x02\x02\x02)\xFC\x03\x02"+
		"\x02\x02+\u0100\x03\x02\x02\x02-\u0107\x03\x02\x02\x02/\u010A\x03\x02"+
		"\x02\x021\u0110\x03\x02\x02\x023\u0112\x03\x02\x02\x025\u0116\x03\x02"+
		"\x02\x027\u011D\x03\x02\x02\x029\u0120\x03\x02\x02\x02;\u0126\x03\x02"+
		"\x02\x02=\u012A\x03\x02\x02\x02?\u0147\x03\x02\x02\x02A\u0149\x03\x02"+
		"\x02\x02C\u014C\x03\x02\x02\x02E\u014F\x03\x02\x02\x02G\u0153\x03\x02"+
		"\x02\x02I\u0155\x03\x02\x02\x02K\u0157\x03\x02\x02\x02M\u0167\x03\x02"+
		"\x02\x02O\u0169\x03\x02\x02\x02Q\u016C\x03\x02\x02\x02S\u0177\x03\x02"+
		"\x02\x02U\u0181\x03\x02\x02\x02W\u0183\x03\x02\x02\x02Y\u018F\x03\x02"+
		"\x02\x02[\u0192\x03\x02\x02\x02]\u0198\x03\x02\x02\x02_\u019E\x03\x02"+
		"\x02\x02a\u01AB\x03\x02\x02\x02c\u01AD\x03\x02\x02\x02e\u01AF\x03\x02"+
		"\x02\x02g\u01C7\x03\x02\x02\x02i\u01C9\x03\x02\x02\x02k\u01E0\x03\x02"+
		"\x02\x02m\u01E3\x03\x02\x02\x02o\u01E8\x03\x02\x02\x02q\u01EC\x03\x02"+
		"\x02\x02s\u01EE\x03\x02\x02\x02u\u01F0\x03\x02\x02\x02w\u01F2\x03\x02"+
		"\x02\x02y\u01F4\x03\x02\x02\x02{\u01F6\x03\x02\x02\x02}\u01F8\x03\x02"+
		"\x02\x02\x7F\u01FA\x03\x02\x02\x02\x81\u01FC\x03\x02\x02\x02\x83\u01FE"+
		"\x03\x02\x02\x02\x85\u0200\x03\x02\x02\x02\x87\u0202\x03\x02\x02\x02\x89"+
		"\u020A\x03\x02\x02\x02\x8B\u020C\x03\x02\x02\x02\x8D\u020E\x03\x02\x02"+
		"\x02\x8F\u0211\x03\x02\x02\x02\x91\u0213\x03\x02\x02\x02\x93\u0215\x03"+
		"\x02\x02\x02\x95\u0217\x03\x02\x02\x02\x97\u0219\x03\x02\x02\x02\x99\u021B"+
		"\x03\x02\x02\x02\x9B\u021D\x03\x02\x02\x02\x9D\u021F\x03\x02\x02\x02\x9F"+
		"\u0221\x03\x02\x02\x02\xA1\u0223\x03\x02\x02\x02\xA3\xA6\x05\x05\x03\x02"+
		"\xA4\xA6\x05=\x1F\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02"+
		"\xA6\x04\x03\x02\x02\x02\xA7\xAC\x05\x07\x04\x02\xA8\xAC\x05\t\x05\x02"+
		"\xA9\xAC\x05\v\x06\x02\xAA\xAC\x05\r\x07\x02\xAB\xA7\x03\x02\x02\x02\xAB"+
		"\xA8\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC"+
		"\x06\x03\x02\x02\x02\xAD\xAF\x05\x11\t\x02\xAE\xB0\x05\x0F\b\x02\xAF\xAE"+
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\b\x03\x02\x02\x02\xB1\xB3"+
		"\x05\x1F\x10\x02\xB2\xB4\x05\x0F\b\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4"+
		"\x03\x02\x02\x02\xB4\n\x03\x02\x02\x02\xB5\xB7\x05)\x15\x02\xB6\xB8\x05"+
		"\x0F\b\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\f\x03\x02"+
		"\x02\x02\xB9\xBB\x053\x1A\x02\xBA\xBC\x05\x0F\b\x02\xBB\xBA\x03\x02\x02"+
		"\x02\xBB\xBC\x03\x02\x02\x02\xBC\x0E\x03\x02\x02\x02\xBD\xBE\t\x02\x02"+
		"\x02\xBE\x10\x03\x02\x02\x02\xBF\xCA\x072\x02\x02\xC0\xC7\x05\x17\f\x02"+
		"\xC1\xC3\x05\x13\n\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02"+
		"\xC3\xC8\x03\x02\x02\x02\xC4\xC5\x05\x1D\x0F\x02\xC5\xC6\x05\x13\n\x02"+
		"\xC6\xC8\x03\x02\x02\x02\xC7\xC2\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02"+
		"\xC8\xCA\x03\x02\x02\x02\xC9\xBF\x03\x02\x02\x02\xC9\xC0\x03\x02\x02\x02"+
		"\xCA\x12\x03\x02\x02\x02\xCB\xD0\x05\x15\v\x02\xCC\xCE\x05\x19\r\x02\xCD"+
		"\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF"+
		"\xD1\x05\x15\v\x02\xD0\xCD\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1"+
		"\x14\x03\x02\x02\x02\xD2\xD5\x072\x02\x02\xD3\xD5\x05\x17\f\x02\xD4\xD2"+
		"\x03\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\x16\x03\x02\x02\x02\xD6\xD7"+
		"\t\x03\x02\x02\xD7\x18\x03\x02\x02\x02\xD8\xDA\x05\x1B\x0E\x02\xD9\xD8"+
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC"+
		"\x03\x02\x02\x02\xDC\x1A\x03\x02\x02\x02\xDD\xE0\x05\x15\v\x02\xDE\xE0"+
		"\x07a\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x1C"+
		"\x03\x02\x02\x02\xE1\xE3\x07a\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE4"+
		"\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\x1E"+
		"\x03\x02\x02\x02\xE6\xE7\x072\x02\x02\xE7\xE8\t\x04\x02\x02\xE8\xE9\x05"+
		"!\x11\x02\xE9 \x03\x02\x02\x02\xEA\xEF\x05#\x12\x02\xEB\xED\x05%\x13\x02"+
		"\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02"+
		"\xEE\xF0\x05#\x12\x02\xEF\xEC\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02"+
		"\xF0\"\x03\x02\x02\x02\xF1\xF2\t\x05\x02\x02\xF2$\x03\x02\x02\x02\xF3"+
		"\xF5\x05\'\x14\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6"+
		"\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7&\x03\x02\x02\x02\xF8"+
		"\xFB\x05#\x12\x02\xF9\xFB\x07a\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xF9"+
		"\x03\x02\x02\x02\xFB(\x03\x02\x02\x02\xFC\xFD\x072\x02\x02\xFD\xFE\t\x06"+
		"\x02\x02\xFE\xFF\x05+\x16\x02\xFF*\x03\x02\x02\x02\u0100\u0105\x05-\x17"+
		"\x02\u0101\u0103\x05/\x18\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103"+
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x05-\x17\x02"+
		"\u0105\u0102\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106,\x03\x02"+
		"\x02\x02\u0107\u0108\t\x07\x02\x02\u0108.\x03\x02\x02\x02\u0109\u010B"+
		"\x051\x19\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02"+
		"\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D0\x03\x02"+
		"\x02\x02\u010E\u0111\x05-\x17\x02\u010F\u0111\x07a\x02\x02\u0110\u010E"+
		"\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u01112\x03\x02\x02\x02\u0112"+
		"\u0113\x072\x02\x02\u0113\u0114\t\b\x02\x02\u0114\u0115\x055\x1B\x02\u0115"+
		"4\x03\x02\x02\x02\u0116\u011B\x057\x1C\x02\u0117\u0119\x059\x1D\x02\u0118"+
		"\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02"+
		"\x02\x02\u011A\u011C\x057\x1C\x02\u011B\u0118\x03\x02\x02\x02\u011B\u011C"+
		"\x03\x02\x02\x02\u011C6\x03\x02\x02\x02\u011D\u011E\t\t\x02\x02\u011E"+
		"8\x03\x02\x02\x02\u011F\u0121\x05;\x1E\x02\u0120\u011F\x03\x02\x02\x02"+
		"\u0121\u0122\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03"+
		"\x02\x02\x02\u0123:\x03\x02\x02\x02\u0124\u0127\x057\x1C\x02\u0125\u0127"+
		"\x07a\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125\x03\x02\x02\x02"+
		"\u0127<\x03\x02\x02\x02\u0128\u012B\x05? \x02\u0129\u012B\x05K&\x02\u012A"+
		"\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B>\x03\x02\x02"+
		"\x02\u012C\u012D\x05\x13\n\x02\u012D\u012F\x070\x02\x02\u012E\u0130\x05"+
		"\x13\n\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130"+
		"\u0132\x03\x02\x02\x02\u0131\u0133\x05A!\x02\u0132\u0131\x03\x02\x02\x02"+
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0136\x05"+
		"I%\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0148"+
		"\x03\x02\x02\x02\u0137\u0138\x070\x02\x02\u0138\u013A\x05\x13\n\x02\u0139"+
		"\u013B\x05A!\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02"+
		"\u013B\u013D\x03\x02\x02\x02\u013C\u013E\x05I%\x02\u013D\u013C\x03\x02"+
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0148\x03\x02\x02\x02\u013F"+
		"\u0140\x05\x13\n\x02\u0140\u0142\x05A!\x02\u0141\u0143\x05I%\x02\u0142"+
		"\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0148\x03\x02"+
		"\x02\x02\u0144\u0145\x05\x13\n\x02\u0145\u0146\x05I%\x02\u0146\u0148\x03"+
		"\x02\x02\x02\u0147\u012C\x03\x02\x02\x02\u0147\u0137\x03\x02\x02\x02\u0147"+
		"\u013F\x03\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0148@\x03\x02\x02"+
		"\x02\u0149\u014A\x05C\"\x02\u014A\u014B\x05E#\x02\u014BB\x03\x02\x02\x02"+
		"\u014C\u014D\t\n\x02\x02\u014DD\x03\x02\x02\x02\u014E\u0150\x05G$\x02"+
		"\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03"+
		"\x02\x02\x02\u0151\u0152\x05\x13\n\x02\u0152F\x03\x02\x02\x02\u0153\u0154"+
		"\t\v\x02\x02\u0154H\x03\x02\x02\x02\u0155\u0156\t\f\x02\x02\u0156J\x03"+
		"\x02\x02\x02\u0157\u0158\x05M\'\x02\u0158\u015A\x05O(\x02\u0159\u015B"+
		"\x05I%\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B"+
		"L\x03\x02\x02\x02\u015C\u015E\x05\x1F\x10\x02\u015D\u015F\x070\x02\x02"+
		"\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0168\x03"+
		"\x02\x02\x02\u0160\u0161\x072\x02\x02\u0161\u0163\t\x04\x02\x02\u0162"+
		"\u0164\x05!\x11\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02"+
		"\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x070\x02\x02\u0166\u0168"+
		"\x05!\x11\x02\u0167\u015C\x03\x02\x02\x02\u0167\u0160\x03\x02\x02\x02"+
		"\u0168N\x03\x02\x02\x02\u0169\u016A\x05Q)\x02\u016A\u016B\x05E#\x02\u016B"+
		"P\x03\x02\x02\x02\u016C\u016D\t\r\x02\x02\u016DR\x03\x02\x02\x02\u016E"+
		"\u016F\x07v\x02\x02\u016F\u0170\x07t\x02\x02\u0170\u0171\x07w\x02\x02"+
		"\u0171\u0178\x07g\x02\x02\u0172\u0173\x07h\x02\x02\u0173\u0174\x07c\x02"+
		"\x02\u0174\u0175\x07n\x02\x02\u0175\u0176\x07u\x02\x02\u0176\u0178\x07"+
		"g\x02\x02\u0177\u016E\x03\x02\x02\x02\u0177\u0172\x03\x02\x02\x02\u0178"+
		"T\x03\x02\x02\x02\u0179\u017A\x07)\x02\x02\u017A\u017B\x05W,\x02\u017B"+
		"\u017C\x07)\x02\x02\u017C\u0182\x03\x02\x02\x02\u017D\u017E\x07)\x02\x02"+
		"\u017E\u017F\x05_0\x02\u017F\u0180\x07)\x02\x02\u0180\u0182\x03\x02\x02"+
		"\x02\u0181\u0179\x03\x02\x02\x02\u0181\u017D\x03\x02\x02\x02\u0182V\x03"+
		"\x02\x02\x02\u0183\u0184\n\x0E\x02\x02\u0184X\x03\x02\x02\x02\u0185\u0187"+
		"\x07$\x02\x02\u0186\u0188\x05[.\x02\u0187\u0186\x03\x02\x02\x02\u0187"+
		"\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0190\x07$\x02"+
		"\x02\u018A\u018C\x07)\x02\x02\u018B\u018D\x05[.\x02\u018C\u018B\x03\x02"+
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E"+
		"\u0190\x07)\x02\x02\u018F\u0185\x03\x02\x02\x02\u018F\u018A\x03\x02\x02"+
		"\x02\u0190Z\x03\x02\x02\x02\u0191\u0193\x05]/\x02\u0192\u0191\x03\x02"+
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194"+
		"\u0195\x03\x02\x02\x02\u0195\\\x03\x02\x02\x02\u0196\u0199\n\x0F\x02\x02"+
		"\u0197\u0199\x05_0\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02"+
		"\x02\x02\u0199^\x03\x02\x02\x02\u019A\u019B\x07^\x02\x02\u019B\u019F\t"+
		"\x10\x02\x02\u019C\u019F\x05a1\x02\u019D\u019F\x05e3\x02\u019E\u019A\x03"+
		"\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F"+
		"`\x03\x02\x02\x02\u01A0\u01A1\x07^\x02\x02\u01A1\u01AC\x05-\x17\x02\u01A2"+
		"\u01A3\x07^\x02\x02\u01A3\u01A4\x05-\x17\x02\u01A4\u01A5\x05-\x17\x02"+
		"\u01A5\u01AC\x03\x02\x02\x02\u01A6\u01A7\x07^\x02\x02\u01A7\u01A8\x05"+
		"c2\x02\u01A8\u01A9\x05-\x17\x02\u01A9\u01AA\x05-\x17\x02\u01AA\u01AC\x03"+
		"\x02\x02\x02\u01AB\u01A0\x03\x02\x02\x02\u01AB\u01A2\x03\x02\x02\x02\u01AB"+
		"\u01A6\x03\x02\x02\x02\u01ACb\x03\x02\x02\x02\u01AD\u01AE\t\x11\x02\x02"+
		"\u01AEd\x03\x02\x02\x02\u01AF\u01B1\x07^\x02\x02\u01B0\u01B2\x07w\x02"+
		"\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B1"+
		"\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02"+
		"\u01B5\u01B6\x05#\x12\x02\u01B6\u01B7\x05#\x12\x02\u01B7\u01B8\x05#\x12"+
		"\x02\u01B8\u01B9\x05#\x12\x02\u01B9f\x03\x02\x02\x02\u01BA\u01BB\x07p"+
		"\x02\x02\u01BB\u01BC\x07w\x02\x02\u01BC\u01BD\x07n\x02\x02\u01BD\u01C8"+
		"\x07n\x02\x02\u01BE\u01BF\x07w\x02\x02\u01BF\u01C0\x07p\x02\x02\u01C0"+
		"\u01C1\x07f\x02\x02\u01C1\u01C2\x07g\x02\x02\u01C2\u01C3\x07h\x02\x02"+
		"\u01C3\u01C4\x07k\x02\x02\u01C4\u01C5\x07p\x02\x02\u01C5\u01C6\x07g\x02"+
		"\x02\u01C6\u01C8\x07f\x02\x02\u01C7\u01BA\x03\x02\x02\x02\u01C7\u01BE"+
		"\x03\x02\x02\x02\u01C8h\x03\x02\x02\x02\u01C9\u01CA\b5\x02\x02\u01CA\u01CF"+
		"\x05\x9FP\x02\u01CB\u01CE\x05\x9FP\x02\u01CC\u01CE\x05\xA1Q\x02\u01CD"+
		"\u01CB\x03\x02\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE\u01D1\x03\x02"+
		"\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0"+
		"j\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D4\x07\f\x02\x02"+
		"\u01D3\u01D5\x05m7\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02"+
		"\x02\x02\u01D5\u01E1\x03\x02\x02\x02\u01D6\u01D7\x07\x0F\x02\x02\u01D7"+
		"\u01D8\x07\f\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01DB\x05m7\x02"+
		"\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01E1\x03"+
		"\x02\x02\x02\u01DC\u01DE\x07\x0F\x02\x02\u01DD\u01DF\x05m7\x02\u01DE\u01DD"+
		"\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02"+
		"\u01E0\u01D2\x03\x02\x02\x02\u01E0\u01D6\x03\x02\x02\x02\u01E0\u01DC\x03"+
		"\x02\x02\x02\u01E1l\x03\x02\x02\x02\u01E2\u01E4\t\x12\x02\x02\u01E3\u01E2"+
		"\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02"+
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6n\x03\x02\x02\x02\u01E7\u01E9\n\x13"+
		"\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA"+
		"\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EBp\x03\x02\x02"+
		"\x02\u01EC\u01ED\x07B\x02\x02\u01EDr\x03\x02\x02\x02\u01EE\u01EF\x07-"+
		"\x02\x02\u01EFt\x03\x02\x02\x02\u01F0\u01F1\x07/\x02\x02\u01F1v\x03\x02"+
		"\x02\x02\u01F2\u01F3\x07,\x02\x02\u01F3x\x03\x02\x02\x02\u01F4\u01F5\x07"+
		"1\x02\x02\u01F5z\x03\x02\x02\x02\u01F6\u01F7\x07<\x02\x02\u01F7|\x03\x02"+
		"\x02\x02\u01F8\u01F9\x070\x02\x02\u01F9~\x03\x02\x02\x02\u01FA\u01FB\x07"+
		".\x02\x02\u01FB\x80\x03\x02\x02\x02\u01FC\u01FD\x07?\x02\x02\u01FD\x82"+
		"\x03\x02\x02\x02\u01FE\u01FF\x07A\x02\x02\u01FF\x84\x03\x02\x02\x02\u0200"+
		"\u0201\x07(\x02\x02\u0201\x86\x03\x02\x02\x02\u0202\u0203\x07~\x02\x02"+
		"\u0203\x88\x03\x02\x02\x02\u0204\u0205\x05\x81A\x02\u0205\u0206\x05\x9D"+
		"O\x02\u0206\u020B\x03\x02\x02\x02\u0207\u0208\x05u;\x02\u0208\u0209\x05"+
		"\x9DO\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0204\x03\x02\x02\x02\u020A"+
		"\u0207\x03\x02\x02\x02\u020B\x8A\x03\x02\x02\x02\u020C\u020D\x07#\x02"+
		"\x02\u020D\x8C\x03\x02\x02\x02\u020E\u020F\x07}\x02\x02\u020F\u0210\x07"+
		"B\x02\x02\u0210\x8E\x03\x02\x02\x02\u0211\u0212\x07}\x02\x02\u0212\x90"+
		"\x03\x02\x02\x02\u0213\u0214\x07\x7F\x02\x02\u0214\x92\x03\x02\x02\x02"+
		"\u0215\u0216\x07*\x02\x02\u0216\x94\x03\x02\x02\x02\u0217\u0218\x07+\x02"+
		"\x02\u0218\x96\x03\x02\x02\x02\u0219\u021A\x07]\x02\x02\u021A\x98\x03"+
		"\x02\x02\x02\u021B\u021C\x07_\x02\x02\u021C\x9A\x03\x02\x02\x02\u021D"+
		"\u021E\x07>\x02\x02\u021E\x9C\x03\x02\x02\x02\u021F\u0220\x07@\x02\x02"+
		"\u0220\x9E\x03\x02\x02\x02\u0221\u0222\t\x14\x02\x02\u0222\xA0\x03\x02"+
		"\x02\x02\u0223\u0224\t\x15\x02\x02\u0224\xA2\x03\x02\x02\x02?\x02\xA5"+
		"\xAB\xAF\xB3\xB7\xBB\xC2\xC7\xC9\xCD\xD0\xD4\xDB\xDF\xE4\xEC\xEF\xF6\xFA"+
		"\u0102\u0105\u010C\u0110\u0118\u011B";
	private static readonly _serializedATNSegment1: string =
		"\u0122\u0126\u012A\u012F\u0132\u0135\u013A\u013D\u0142\u0147\u014F\u015A"+
		"\u015E\u0163\u0167\u0177\u0181\u0187\u018C\u018F\u0194\u0198\u019E\u01AB"+
		"\u01B3\u01C7\u01CD\u01CF\u01D4\u01DA\u01DE\u01E0\u01E5\u01EA\u020A\x03"+
		"\x035\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			XDocSyntaxLexer._serializedATNSegment0,
			XDocSyntaxLexer._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XDocSyntaxLexer.__ATN) {
			XDocSyntaxLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XDocSyntaxLexer._serializedATN));
		}

		return XDocSyntaxLexer.__ATN;
	}

}

