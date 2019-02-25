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
                'faqSubTitle14': '14- Je n\'ai trouvé personne pour faire un échange pendant cette année d\'abonnement, comment fais-je pour profiter d\'une nouvelle année d\'abonnement gratuite ?'
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
                'faqSubTitle14': '14- I did not find anyone to do an exchange during this year of subscription, how do I do to enjoy a new year of free subscription ?'
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
					<p>Une équipe se charge de valider, 1 à 1 les profils. En vérifiant la conformité des profils. Cela peut prendre jusqu'à 48h.</p>
					<h2>Pourquoi ?</h2>
					<p>Pour GAOODI la sécurité est primordiale, c’est pourquoi nous demandons une pièce d’identité du jeune ainsi que d’un parent ou tuteur légal et une équipe de sécurité vérifie les identités ainsi qu’une recherche approfondie sur le parent pour être sûre de la fiabilité du profil. C’est pourquoi le profil peut mettre jusqu'à 48 heures avant d'être validé.</p>					
					<h2 id='faq_2'>{fullText[this.props.locale].faqSubTitle2}</h2>
					<p>Cela peut être dû à plusieurs raisons :</p>
					<p>- Votre profil a été jugé suspect par l'oganisme chargé de vérifier les profils. Nous ne donnerons pas suite à votre  inscription.</p>
					<p>- Le parent qui a fourni sa pièce d’identité doit figurer sur au moins une photo que vous avez fournie sur votre profil. Il doit être identifiable.</p>
					<h2 id='faq_3'>{fullText[this.props.locale].faqSubTitle3}</h2>
					<p>Pour donner envie à votre match probable et à sa famille il est fortement conseillé d’insérer de jolie photo de famille.</p>
					<p>Ex :</p>
					<div className="divImg">
					<img src="/img/720/FAQ_Q3.jpg"/>
					</div>
					<h2 id='faq_4'>{fullText[this.props.locale].faqSubTitle4}</h2>
					<p>Oui, si vous n'acceptez un match pour quelque raison que ce soit, nous vous en trouverons un autre.</p>
					<h2 id='faq_5'>{fullText[this.props.locale].faqSubTitle5}</h2>
					<p>Tout dépend de la demande, du nombre d’inscrit.</p>
					<h2 id='faq_6'>{fullText[this.props.locale].faqSubTitle6}</h2>
					<p>Non, pas besoin de s’inquiéter. Le site vient d’ouvrir ses portes, nous devons attendre le bon match avant de vous le proposer.</p>
					<h2 id='faq_7'>{fullText[this.props.locale].faqSubTitle7}</h2>
					<p>SI vous n’arrivez pas à accéder à la recherche de match, il se peut que votre profil n’a pas encore été validé ou que vous n’ayez pas répondu à au moins 70% des questions.</p>
					<h2 id='faq_8'>{fullText[this.props.locale].faqSubTitle8}</h2>
					<p>Pas besoin d’aller bien loin, rendez-vous sur votre profil (même si celui-ci n’a pas encore été validé) et cliquez sur cette icone : <img className='smallImg' src='/img/120/question.png'/></p>
					<h2 id='faq_9'>{fullText[this.props.locale].faqSubTitle9}/h2>
					<p>Seules les questions munies de ce symbole <img className='smallImg' src='/img/240/modif_quest_240.png'/> sont modifiables à tout moment dans l’espace question, cliquez sur ce même symbole <img className='smallImg' src='/img/120/question.png'/> en haut à droite.</p>
					<p>Les autres questions ne sont pas modifiables.</p>
					<h2 id='faq_10'>{fullText[this.props.locale].faqSubTitle10}</h2>
					<p>Tout simplement parce qu’avec GAOODI nous fonctionnons par un système de match. Seuls les profils qui vous sont proposés sont visibles à vos yeux.</p>
					<h2 id='faq_11'>{fullText[this.props.locale].faqSubTitle11}</h2>
					<p>Tout simplement en prenant contact via notre chat et ainsi faire connaissance et décider ensemble pour faire un échange. Libre à vous de faire comme vous le souhaitez !</p>
					<h2 id='faq_12'>{fullText[this.props.locale].faqSubTitle12}</h2>
					<div className="noMargin">
						<p>Allez dans « mes infos » puis « mon abonnement » et cliquez sur « Résilier ». </p>
						<p>Vous avez deux options:</p>
						<p className="regPadLef italBold">Résilier -- Profil inactif</p>
						<p>Cela veut dire qu’en vous désabonnant votre profil ne sera pas supprimé de notre base de donnée, ni vos informations. Cependant votre profil ne sera plus actif, vous ne pourrez plus faire de demande de match ou communiquer avec vos amis du monde. Vous pourrez réactiver votre abonnement à tout moment.</p>
						<p className="regPadLef italBold">Résilier -- Profil supprimé</p>
						<p>Cela veut dire, qu’en vous désabonnant  votre profil sera définitivement supprimé de notre base de donnée, ainsi que toute vos informations. Votre profil n’existera plus et si vous voulez vous réabonner il faudra repartir de zéro. </p>
						<h2 id='faq_13'>{fullText[this.props.locale].faqSubTitle13}</h2>
						<p>Quand vous le voulez ! Vous avez déjà payé pour une année entière à partir de la date de votre achat. En vous désabonnant, vous ne serez pas débité pour l’année d’après (par rapport à votre date d’achat).</p>
					</div>
					<h2 id='faq_14'>{fullText[this.props.locale].faqSubTitle14}</h2>
					<div>
						<p>Pas de souci, vous êtes au bon endroit, il suffit de nous contacter par mail dans la rubrique « nous contacter » et de nous envoyer cette demande.</p>
						<p>Cliquez sur le raccourci de votre profil, puis tout en bas «nous contacter».</p>
						<p>Pour qu’elle soit acceptée;</p>
						<p className="regPadLef">- Vous n’avez acceptez aucune demande de match.</p>
						<p className="regPadLef">- La demande de match n’a pas abouti, c’est-à-dire que vous avez été en contact avec cette personne pendant un mois ou moins.</p>
					</div>
				</div>
			</div>
		);
	}

}

export default Faq;