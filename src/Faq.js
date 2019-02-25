import React from 'react';
import ReactDOM from 'react-dom';
import './css/Faq.css';

class Faq extends React.Component {

	render() {
		const fullText = {
			'fr': {
                'faqTitle': 'FAQ- Foire Aux Questions',
                'faqSubTitle1': '1- Pourquoi mon profil n\'est-il pas encore validé ?',
                'faqSubTitle2': '2- Mon profil vient d\'être refusé, je ne comprends pas pourquoi ?',
                'faqSubTitle3': '3- Quelles photos devrais-je mettre sur mon profil ?',
                'faqSubTitle4': '4- Et si je refuse un match, va-t-on m\'en proposer un autre ?',
                'faqSubTitle5': '5- Combien de temps met-on pour trouver un match ?',
                'faqSubTitle6': '6- J\'ai fait ma demande de match il y a quelques semaines et je n\'ai toujours pas de réponses, dois-je m\'inquiéter ?',
                'faqSubTitle7': '7- Je n\'arrive pas à accéder à la demande de match, que faire ?',
                'faqSubTitle8': '8- Où dois-je aller pour que l\'on me pose des questions sur ma personalité, que faire ?',
                'faqSubTitle9': '9- Je me suis trompé(e) de réponse (ou j\'ai changé d\'avis), puis-je modifier ma réponse ?',
                'faqSubTitle10': '10- Pourquoi je ne vois aucun autre profil sur le site ?',
                'faqSubTitle11': '11- Je viens d\'accépter un match, comment ça se passe ensuite ?',
                'faqSubTitle12': '12- Où est-ce que je peux résilier mon abonement ?',
                'faqSubTitle13': '13- Quand est-ce qu\'il faut que je me désabonne ?',
                'faqSubTitle14': '14- Je n\'ai trouvé personne pour faire un échange pendant cette année d\'abonnement, comment fais-je pour profiter d\'une nouvelle année d\'abonnement gratuite ?',
				'text1_1': 'Une équipe se charge de valider, 1 à 1 les profils. En vérifiant la conformité des profils. Cela peut prendre jusqu\'à 48h.',
				'text1_2': 'Pourquoi ?',
				'text1_3': 'Pour GAOODI la sécurité est primordiale, c’est pourquoi nous demandons une pièce d’identité du jeune ainsi que d’un parent ou tuteur légal et une équipe de sécurité vérifie les identités ainsi qu’une recherche approfondie sur le parent pour être sûre de la fiabilité du profil. C’est pourquoi le profil peut mettre jusqu\'à 48 heures avant d\'être validé.',
				'text2_1': 'Cela peut être dû à plusieurs raisons :',
				'text2_2': '- Votre profil a été jugé suspect par l\'oganisme chargé de vérifier les profils. Nous ne donnerons pas suite à votre  inscription.',
				'text2_3': '- Le parent qui a fourni sa pièce d’identité doit figurer sur au moins une photo que vous avez fournie sur votre profil. Il doit être identifiable.',
				'text3_1': 'Pour donner envie à votre match probable et à sa famille il est fortement conseillé d’insérer de jolie photo de famille.',
				'text3_2': 'Ex :',
				'text4_1': 'Oui, si vous n\'acceptez un match pour quelque raison que ce soit, nous vous en trouverons un autre.',
				'text5_1': 'Tout dépend de la demande, du nombre d’inscrit.',
				'text6_1': 'Non, pas besoin de s’inquiéter. Le site vient d’ouvrir ses portes, nous devons attendre le bon match avant de vous le proposer.',
				'text7_1': 'SI vous n’arrivez pas à accéder à la recherche de match, il se peut que votre profil n’a pas encore été validé ou que vous n’ayez pas répondu à au moins 70% des questions.',
				'text8_1': 'Pas besoin d’aller bien loin, rendez-vous sur votre profil (même si celui-ci n’a pas encore été validé) et cliquez sur cette icone : ',
				'text9_1': 'Seules les questions munies de ce symbole',
				'text9_2': ' sont modifiables à tout moment dans l’espace question, cliquez sur ce même symbole',
				'text9_3': ' en haut à droite.',
				'text9_4': 'Les autres questions ne sont pas modifiables.',
				'text10_1': 'Tout simplement parce qu’avec GAOODI nous fonctionnons par un système de match. Seuls les profils qui vous sont proposés sont visibles à vos yeux.',
				'text11_1': 'Tout simplement en prenant contact via notre chat et ainsi faire connaissance et décider ensemble pour faire un échange. Libre à vous de faire comme vous le souhaitez !',
				'text12_1': 'Allez dans « mes infos » puis « mon abonnement » et cliquez sur « Résilier ». ',
				'text12_2': 'Vous avez deux options:',
				'text12_3': 'Résilier -- Profil inactif',
				'text12_4': 'Cela veut dire qu’en vous désabonnant votre profil ne sera pas supprimé de notre base de donnée, ni vos informations. Cependant votre profil ne sera plus actif, vous ne pourrez plus faire de demande de match ou communiquer avec vos amis du monde. Vous pourrez réactiver votre abonnement à tout moment.',
				'text12_5': 'Résilier -- Profil supprimé',
				'text12_6': 'Cela veut dire, qu’en vous désabonnant  votre profil sera définitivement supprimé de notre base de donnée, ainsi que toute vos informations. Votre profil n’existera plus et si vous voulez vous réabonner il faudra repartir de zéro.',
				'text13_1': 'Quand vous le voulez ! Vous avez déjà payé pour une année entière à partir de la date de votre achat. En vous désabonnant, vous ne serez pas débité pour l’année d’après (par rapport à votre date d’achat).',
				'text14_1': 'Pas de souci, vous êtes au bon endroit, il suffit de nous contacter par mail dans la rubrique « nous contacter » et de nous envoyer cette demande.',
				'text14_2': 'Cliquez sur le raccourci de votre profil, puis tout en bas «nous contacter».',
				'text14_3': 'Pour qu’elle soit acceptée;',
				'text14_4': '- Vous n’avez acceptez aucune demande de match.',
				'text14_5': '- La demande de match n’a pas abouti, c’est-à-dire que vous avez été en contact avec cette personne pendant un mois ou moins.'		
			},
			'en':  {
                'faqTitle': 'FAQ- Frequently Asked Questions',
                'faqSubTitle1': '1- Why is my profile not yet validated ?',
                'faqSubTitle2': '2- My profile has just been refused, I do not understand why ?',
                'faqSubTitle3': '3- What photos should I put on my profile ?',
                'faqSubTitle4': '4- And if I refuse a match, will I be offered another ?',
                'faqSubTitle5': '5- How long does it take to find a match ?',
                'faqSubTitle6': '6- I made my match request a few weeks ago and I still have no answers, should I worry ?',
                'faqSubTitle7': '7- I can not get the match request, what can I do ?',
                'faqSubTitle8': '8- Where should I go to ask me about my personality, what to do ?',
                'faqSubTitle9': '9- I am wrong (e) answer (or I changed my mind), can I change my answer ?',
                'faqSubTitle10': '10- Why do not I see any other profile on the site ?',
                'faqSubTitle11': '11- I have just accepted a match, how does it go next ?',
                'faqSubTitle12': '12- Where can I cancel my subscription ?',
                'faqSubTitle13': '13- When do I have to unsubscribe ?',
				'faqSubTitle14': '14- I did not find anyone to do an exchange during this year of subscription, how do I do to enjoy a new year of free subscription ?',
				'text1_1': 'A team is responsible for validating every profiles. By checking the conformity of the profiles. It can take up to 48 hours.',
				'text1_2': 'Why ?',
				'text1_3': 'For GAOODI, security is paramount, so we ask for an ID from the young person as well as a parent or legal guardian and a security team verifies the identities as well as a thorough research on the parent to be sure of the reliability of the profile. This is why the profile can take up to 48 hours to be validated.',
				'text2_1': 'This can be due to several reasons :',
				'text2_2': '- Your profile has been deemed suspect by the organization responsible for checking profiles. We will not proceed with your registration.',
				'text2_3': '- The parent who provided their ID must appear on at least one photo you provided on your profile. It must be identifiable.',
				'text3_1': 'To make you want your likely match and his family is strongly recommended to insert a nice family photo.',
				'text3_2': 'Ex :',
				'text4_1': 'Yes, if you do not accept a match for any reason, we will find you another.',
				'text5_1': 'It all depends on the demand, the number of registrants.',
				'text6_1': 'No, no need to worry. The site has just opened, we have to wait for the good match before offering it to you.',
				'text7_1': 'If you can not access the match search, your profile may not have been verified yet or you may have not answered at least 70% of the questions.',
				'text8_1': 'No need to go far, go to your profile (even if it has not been validated yet) and click on this icon : ',
				'text9_1': 'Only questions with this symbol',
				'text9_2': ' can be modified at any time in the question area, click on this same symbol',
				'text9_3': ' top right.',
				'text9_4': 'Other questions are not modifiable.',
				'text10_1': 'Simply because with GAOODI we operate through a match system. Only profiles that are available to you are visible to you.',
				'text11_1': 'Simply by contacting us through our chat and get to know each other and decide together to make an exchange. Free to do as you wish!',
				'text12_1': 'Go to "my info" and then "my subscription" and click on "Cancel".',
				'text12_2': 'You have two options:',
				'text12_3': 'Cancel - Inactive Profile',
				'text12_4': 'This means that by unsubscribing your profile will not be deleted from our database nor your information. However, your profile will no longer be active, you will no longer be able to apply for a match or communicate with your friends around the world. You can reactivate your subscription at any time.',
				'text12_5': 'Cancel - Deleted profile',
				'text12_6': 'This means that by unsubscribing your profile will be permanently removed from our database, as well as all your information. Your profile will no longer exist and if you want to re-subscribe you will have to start from scratch.',
				'text13_1': 'When you want ! You have already paid for a full year from the date of your purchase. By unsubscribing, you will not be charged for the following year (compared to your date of purchase).',
				'text14_1': 'No problem, you are in the right place, just contact us by mail in the "contact us" and send us this request.',
				'text14_2': 'Click on the shortcut of your profile, then at the bottom "contact us".',
				'text14_3': 'For it to be accepted;',
				'text14_4': '- You have not accepted any match request.',
				'text14_5': '- The match request was unsuccessful, that is, you have been in contact with that person for a month or less.'
			}
		};

		return(
			<div id='FAQContainer'>
				<div id='FAQTitle'>{fullText[this.props.locale].faqTitle}</div>
				<div id='FAQSummary'>
					<a href='#faq_1'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle1}</div></a>
					<a href='#faq_2'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle2}</div></a>
					<a href='#faq_3'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle3}</div></a>
					<a href='#faq_4'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle4}</div></a>
					<a href='#faq_5'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle5}</div></a>
					<a href='#faq_6'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle6}</div></a>
					<a href='#faq_7'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle7}</div></a>
					<a href='#faq_8'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle8}</div></a>
					<a href='#faq_9'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle9}</div></a>
					<a href='#faq_10'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle10}</div></a>
					<a href='#faq_11'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle11}</div></a>
					<a href='#faq_12'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle12}</div></a>
					<a href='#faq_13'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle13}</div></a>
					<a href='#faq_14'> <div className='aSummaryRow'>{fullText[this.props.locale].faqSubTitle14}</div></a>
				</div>
				<div id='answerContainer'>
					<h2 id='faq_1'>{fullText[this.props.locale].faqSubTitle1}</h2>
					<p>{fullText[this.props.locale].text1_1}</p>
					<h2>{fullText[this.props.locale].text1_2}</h2>
					<p>{fullText[this.props.locale].text1_3}</p>
					<h2 id='faq_2'>{fullText[this.props.locale].faqSubTitle2}</h2>
					<p>{fullText[this.props.locale].text2_1}</p>
					<p>{fullText[this.props.locale].text2_2}</p>
					<p>{fullText[this.props.locale].text2_3}</p>
					<h2 id='faq_3'>{fullText[this.props.locale].faqSubTitle3}</h2>
					<p>{fullText[this.props.locale].text3_1}</p>
					<p>{fullText[this.props.locale].text3_2}</p>
					<div className="divImg">
					<img src="/img/720/FAQ_Q3.jpg"/>
					</div>
					<h2 id='faq_4'>{fullText[this.props.locale].faqSubTitle4}</h2>
					<p>{fullText[this.props.locale].text4_1}</p>
					<h2 id='faq_5'>{fullText[this.props.locale].faqSubTitle5}</h2>
					<p>{fullText[this.props.locale].text5_1}</p>
					<h2 id='faq_6'>{fullText[this.props.locale].faqSubTitle6}</h2>
					<p>{fullText[this.props.locale].text6_1}</p>
					<h2 id='faq_7'>{fullText[this.props.locale].faqSubTitle7}</h2>
					<p>{fullText[this.props.locale].text7_1}</p>
					<h2 id='faq_8'>{fullText[this.props.locale].faqSubTitle8}</h2>
					<p>{fullText[this.props.locale].text8_1}<img className='smallImg' src='/img/120/question.png'/></p>
					<h2 id='faq_9'>{fullText[this.props.locale].faqSubTitle9}</h2>
					<p>{fullText[this.props.locale].text9_1}<img className='smallImg' src='/img/240/modif_quest_240.png'/>{fullText[this.props.locale].text9_2}<img className='smallImg' src='/img/120/question.png'/>{fullText[this.props.locale].text9_3}</p>
					<p>{fullText[this.props.locale].text9_4}</p>
					<h2 id='faq_10'>{fullText[this.props.locale].faqSubTitle10}</h2>
					<p>{fullText[this.props.locale].text10_1}</p>
					<h2 id='faq_11'>{fullText[this.props.locale].faqSubTitle11}</h2>
					<p>{fullText[this.props.locale].text11_1}</p>
					<h2 id='faq_12'>{fullText[this.props.locale].faqSubTitle12}</h2>
					<div className="noMargin">
						<p>{fullText[this.props.locale].text12_1}</p>
						<p>{fullText[this.props.locale].text12_2}</p>
						<p className="regPadLef italBold">{fullText[this.props.locale].text12_3}</p>
						<p>{fullText[this.props.locale].text12_4}</p>
						<p className="regPadLef italBold">{fullText[this.props.locale].text12_5}</p>
						<p>{fullText[this.props.locale].text12_6}</p>
						<h2 id='faq_13'>{fullText[this.props.locale].faqSubTitle13}</h2>
						<p>{fullText[this.props.locale].text13_1}</p>
					</div>
					<h2 id='faq_14'>{fullText[this.props.locale].faqSubTitle14}</h2>
					<div>
						<p>{fullText[this.props.locale].text14_1}</p>
						<p>{fullText[this.props.locale].text14_2}</p>
						<p>{fullText[this.props.locale].text14_3}</p>
						<p className="regPadLef">{fullText[this.props.locale].text14_4}</p>
						<p className="regPadLef">{fullText[this.props.locale].text14_5}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Faq;